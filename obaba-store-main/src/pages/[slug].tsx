/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable react/no-danger */
/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  HStack,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { css, cx } from '@emotion/css';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useMutationOrderPreparation } from '@/api/queries/order-prepare';
import { fetchPaymentGroups } from '@/api/queries/payments';
import { fetchProduct } from '@/api/queries/product';
import { fetchProducts } from '@/api/queries/products';
import { useMutationSubmitOrder } from '@/api/queries/submit-order';
import {
  fetchTripayPaymentChannel,
  QueryTripayPaymentChannelData,
} from '@/api/tripay/payment-channels';
import { ModalOrderConfirmation } from '@/components/modal-order-confirmation';
import { PaymentChannelCard } from '@/components/payment-channel-card';
import { BASE_URL, TRIPAY_PAYMENT_CHANNEL, WHATSAPP_NO_ADMIN_1 } from '@/config/constants';
import { DISCOUNTS } from '@/config/discounts';
import { PAYMENT_CHANNEL_GROUPS_EXCEPTION } from '@/config/payments';
import { PRODUCTS_EXCEPTION } from '@/config/products';
import getQueryClient from '@/config/react-query';
import { Payment, PaymentGroup } from '@/types/payment';
import { Product, ProductItem } from '@/types/product';

import { Loader } from './components/loader';

type Context = GetStaticPropsContext<{ slug: string }>;

export async function getStaticProps({ params }: Context) {
  const { slug } = params!;

  const queryClient = getQueryClient();
  const product = await queryClient.fetchQuery(['product', { slug }], fetchProduct);
  const paymentGroups = await queryClient.fetchQuery(
    ['payment-groups', { except: 'wallet' }],
    fetchPaymentGroups,
  );

  const tripayPaymentChannels = await queryClient.fetchQuery(
    ['tripay-payment-channels', {}],
    fetchTripayPaymentChannel,
  );

  return {
    props: {
      product,
      paymentGroups,
      tripayPaymentChannels,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const queryClient = getQueryClient();
  const products = await queryClient.fetchQuery(['products', { q: '' }], fetchProducts);
  return {
    paths: products
      .filter((product) => !PRODUCTS_EXCEPTION.includes(product.slug))
      .map((product) => ({
        params: { slug: product.slug },
      })),
    fallback: 'blocking',
  };
}

type Props = {
  product: Product;
  paymentGroups: PaymentGroup[];
  tripayPaymentChannels: QueryTripayPaymentChannelData;
};

type GetFeeProps = {
  price: number;
  tripayPaymentChannels?: QueryTripayPaymentChannelData;
  paymentChannel?: Payment;
};

const getFee = ({ price, tripayPaymentChannels, paymentChannel }: GetFeeProps) => {
  if (paymentChannel?.group === 'banktransfer') return 0;

  const tripayPaymentChannel = tripayPaymentChannels?.find(
    (tpc) =>
      tpc.code ===
      (TRIPAY_PAYMENT_CHANNEL[paymentChannel?.code as keyof typeof TRIPAY_PAYMENT_CHANNEL] ||
        paymentChannel?.code),
  );

  const fee =
    Number(tripayPaymentChannel?.fee_merchant.flat) +
    price * (Number(tripayPaymentChannel?.fee_merchant.percent) / 100);

  return Math.round(fee);
};

export default function DetailPage({ product, paymentGroups, tripayPaymentChannels }: Props) {
  const router = useRouter();
  const toast = useToast();
  const form = useForm();
  const {
    formState: { isSubmitSuccessful },
  } = form;
  const disclosure = useDisclosure();

  const [selectedDM, setSelectedDM] = useState<ProductItem>();
  const [selectedPayment, setSelectedPayment] = useState<Payment>();

  const orderPreparation = useMutationOrderPreparation();
  const submitOrder = useMutationSubmitOrder({
    onSuccess: (res) => {
      if (res.success) router.push(`/waiting?trxId=${res.data.merchant_ref}`);
      else throw new Error(res.message);
    },
    onError: (error) => {
      toast({
        title: error.message,
        status: 'warning',
        duration: 1500,
        isClosable: true,
        position: 'top',
      });
    },
  });
  const payloadOrder = {
    data: {
      ...form.getValues('data'),
    },
    productId: product.id,
    productItemId: selectedDM?.id || 0,
    paymentChannelId: selectedPayment?.id || 0,
    username: form.getValues('username'),
    phoneNumber: form.getValues('phoneNumber'),
    voucher: form.getValues('voucher'),
    smileCode: selectedDM?.smileCode || '',
  };

  useEffect(() => {
    form.setValue('productId', product.id);
    form.register('productItemId', { required: true });
    form.register('paymentChannelId', { required: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (router.isFallback) return <Loader />;

  const discountItem =
    DISCOUNTS.find((discount) => discount.slug === product.slug)?.discount_percentage || 0;

  const items = (product?.items || []).map((item) => ({
    ...item,
    price: Math.ceil(item.price - item.price * (discountItem / 100)),
  }));

  const showError = () =>
    toast({
      title: 'Mohon untuk pilih Nominal Top Up terlebih dahulu',
      status: 'warning',
      duration: 1500,
      isClosable: true,
      position: 'top',
    });

  const showErrorForm = () =>
    toast({
      title:
        'Mohon untuk melengkapi User ID, Nominal Top Up, Metode Pembayaran & Nomor WhatsApp terlebih dahulu',
      status: 'warning',
      duration: 6000,
      isClosable: true,
      position: 'top',
    });

  const showErrorCheckUsername = () =>
    toast({
      title: 'UserID tidak ditemukan, pastikan untuk memasukkan UserID yang valid',
      status: 'warning',
      duration: 6000,
      isClosable: true,
      position: 'top',
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendWA = (phoneNumberAdmin: string) => {
    const userData = form.getValues('data');
    const mapUserData = Object.entries(userData)
      .map(([key, val]) => `*${key}*: ${val}`)
      .join('\n');

    const message = `
Hi, Admin!
Mohon Bantuannya Ya!

Informasi pembelian:

*Nomor HP*: ${form.getValues('phoneNumber')}
*Layanan*: ${product.title}
*Item*: ${selectedDM?.name}
*Harga*: Rp ${selectedDM?.price.toLocaleString('id-ID')}
*Pembayaran*: ${selectedPayment?.name}

Data:
${mapUserData}
${form.getValues('username') ? `*Username*: ${form.getValues('username')}` : ''}

_NB: Pastikan order di jam aktif atau akan diproses keesokan harinya_

Mohon ditunggu ya kak, kami proses orderanmu secepatnya :)
Terima kasih ^^
`;

    const link = `https://wa.me/${phoneNumberAdmin}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  return (
    <>
      <NextSeo
        title={`Top Up ${product.title} Termurah Se-JagadRaya !!`}
        description={`Top Up ${product.title} dengan GoPay, ShopeePay, Dana, OVO, LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet. Tanpa perlu registrasi ataupun log-in.`}
        // openGraph={{
        //   images: [
        //     {
        //       url: product.logoUrl,
        //       width: 178,
        //       height: 178,
        //       alt: product.title,
        //       type: 'image/png',
        //     },
        //   ],
        // }}
      />
      <div className="just-pay-1hit16y">
        <div className="just-pay-2woq68">
          <button
            type="button"
            className="chakra-button just-pay-15kbwye"
            aria-label="Back"
            onClick={() => router.push('/')}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon just-pay-18rzo98"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
              </g>
            </svg>
          </button>
        </div>
        <div className="just-pay-qvx852">
          <main className="just-pay-1rz8i1b">
            <img
              alt="Cover"
              src="/images/banner-slug-1.png"
              loading="lazy"
              className="chakra-image just-pay-p2yxyd"
              placeholder="blur"
            />
            <div className="just-pay-wjx3om">
              <img
                alt="Logo"
                // src={product.logoUrl.replace('http:', 'https:').replace(`${BASE_API}/media/`, '/api/media/')}
                src={product.logoUrl}
                loading="lazy"
                className="chakra-image just-pay-9r15ii"
                placeholder="blur"
              />
            </div>
            <div className="just-pay-1nfk9g0">
              <div className="chakra-stack just-pay-i75blt">
                <h1 className="chakra-heading just-pay-hktpdg">{product.title}</h1>
                <p className="chakra-text just-pay-78ya9x">{product.subTitle}</p>
              </div>
              <div className="just-pay-13dsgg7">
                <div className="chakra-text just-pay-dw5ttn">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.description.replace(
                        'https://gamestoreindonesia.com',
                        BASE_URL,
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
            <form className="just-pay-1wdvm8j">
              <hr className="just-pay-z4a72a" />
              <div className="just-pay-1uztvkj">
                <h2 className="chakra-heading just-pay-11iu74w">
                  <span className="just-pay-vkkrz3">1</span>
                  <span className="just-pay-p3vkp9">Masukkan User ID</span>
                </h2>
                <div className="just-pay-1rwovhe">
                  <div className="chakra-stack just-pay-siszct">
                    <div
                      className={cx(
                        'just-pay-8l8r03',
                        css(`
                        grid-template-columns: repeat(${
                          product.userInput.fields.length >= 2 ? 2 : 1
                        }, minmax(0px, 1fr))
                      `),
                      )}
                    >
                      {product.userInput.fields.map((field) => {
                        if (field.tag === 'dropdown') {
                          return (
                            <div
                              key={field.attrs.name}
                              role="group"
                              className="chakra-form-control just-pay-1kxonj9"
                            >
                              <Select
                                className="chakra-input just-pay-1pwkzcn"
                                placeholder={`Pilih ${field.attrs.name}`}
                              >
                                {JSON.parse(field.attrs.datas).map(
                                  (opt: { value: string; text: string }) => (
                                    <option key={opt?.value} value={opt?.value}>
                                      {opt.text}
                                    </option>
                                  ),
                                )}
                              </Select>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={field.attrs.name}
                            role="group"
                            className="chakra-form-control just-pay-1kxonj9"
                          >
                            <input
                              type="tel"
                              placeholder={field.attrs.placeholder}
                              id={field.attrs.name}
                              className="chakra-input just-pay-1pwkzcn"
                              defaultValue=""
                              {...form.register(`data.${field.attrs.name}`, {
                                required: '* required',
                              })}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon just-pay-14yg3v1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z" />
                      </g>
                    </svg>
                  </div>
                  <p className="chakra-text just-pay-14fym7t">
                    {product.userInput.instructionText}
                  </p>
                </div>
              </div>

              {/* NOMINAL TOP UP */}
              <hr className="just-pay-z4a72a" />
              <div className="just-pay-1uztvkj">
                <h2 className="chakra-heading just-pay-11iu74w">
                  <span className="just-pay-vkkrz3">2</span>
                  <span className="just-pay-p3vkp9">Pilih Nominal Top Up</span>
                </h2>
                <div className="just-pay-1rwovhe">
                  <div className="just-pay-14i3gmy ">
                    {items?.map((item) => (
                      <div
                        key={`topup-item-${item.id}`}
                        role="none"
                        className={cx({
                          'just-pay-1nt7ka4': selectedDM?.id !== item.id,
                          'just-pay-tam5ch1': selectedDM?.id === item.id,
                        })}
                        onClick={() => {
                          form.setValue('productItemId', item.id);
                          setSelectedDM(item);
                        }}
                      >
                        <span
                          line-height="52px"
                          className={cx({
                            'just-pay-1r0t7wi': selectedDM?.id !== item.id,
                            'just-pay-13e7uab': selectedDM?.id === item.id,
                          })}
                        />
                        <div className="chakra-stack just-pay-xerlbm">
                          <span className="chakra-text just-pay-bmadji">{item.name}</span>
                          <span className="chakra-text just-pay-ju6si4">
                            Rp&nbsp;
                            {item.price.toLocaleString('id-ID')}
                            ,-
                          </span>
                        </div>
                        <div className="just-pay-17xejub" />
                        <div className="just-pay-gmuwbf">
                          {item.iconUrl && (
                            <img
                              alt="Icon Item"
                              // src={item.iconUrl
                              //   .replace('http:', 'https:')
                              //   .replace(`${BASE_API}/media/`, '/api/media/')}
                              src={item.iconUrl}
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src =
                                  'https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/gamestoreindonesia/2-min-011f.png';
                              }}
                              loading="lazy"
                              className="chakra-image just-pay-1d5wfwy"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* METODE PEMBAYARAN */}
              <hr className="just-pay-z4a72a" />
              <div className="just-pay-1uztvkj">
                <h2 className="chakra-heading just-pay-11iu74w">
                  <span className="just-pay-vkkrz3">3</span>
                  <span className="just-pay-p3vkp9">Pilih Metode Pembayaran</span>
                </h2>
                <div className="just-pay-1rwovhe">
                  <Accordion allowMultiple>
                    {paymentGroups?.map((paymentGroup) => (
                      <AccordionItem
                        key={`${paymentGroup.group}`}
                        className="just-pay-92xqyz disabled:!cursor-pointer"
                        isDisabled={!selectedDM}
                        onClick={() => (!selectedDM ? showError() : null)}
                      >
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton className="just-pay-9oswqi hover:!bg-transparent">
                              <div className="just-pay-n5qlg6">
                                <p className="chakra-text just-pay-wwm21b">{paymentGroup.group}</p>
                                <svg
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  className="chakra-icon chakra-accordion__icon just-pay-186l2rg"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                  />
                                </svg>
                              </div>
                              {!isExpanded && (
                                <HStack className="just-pay-10ipkxy">
                                  {/* {paymentGroup.datas.map((data) => (
                                    <img
                                      key={data.id}
                                      alt={data.name}
                                      // src={data.iconUrl
                                      //   .replace('http:', 'https:')
                                      //   .replace(`${BASE_API}/media/`, '/api/media/')}
                                      src=""
                                      loading="lazy"
                                      className={cx('chakra-image just-pay-8ve9xn', {
                                        'just-pay-1yyqsdn': paymentGroup.group === 'QRIS',
                                      })}
                                    />
                                  ))} */}
                                </HStack>
                              )}
                            </AccordionButton>
                            <AccordionPanel>
                              <div
                                role="region"
                                id="accordion-panel-3"
                                aria-labelledby="accordion-button-3"
                                className="chakra-accordion__panel just-pay-mxa4qn"
                              >
                                <div className="just-pay-14i3gmy">
                                  {paymentGroup.datas.map((paymentChannel) => (
                                    <PaymentChannelCard
                                      key={paymentChannel.code}
                                      paymentChannel={paymentChannel}
                                      isSelected={selectedPayment === paymentChannel}
                                      onClick={() => {
                                        form.setValue('paymentChannelId', paymentChannel.id);
                                        setSelectedPayment(paymentChannel);
                                      }}
                                      price={
                                        Number(selectedDM?.price) +
                                        getFee({
                                          price: Number(selectedDM?.price),
                                          tripayPaymentChannels,
                                          paymentChannel,
                                        })
                                      }
                                      isOffline={PAYMENT_CHANNEL_GROUPS_EXCEPTION.includes(
                                        paymentChannel.group,
                                      )}
                                    />
                                  ))}
                                </div>
                              </div>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* WHATSAPP */}
              <hr className="just-pay-z4a72a" />
              <div className="just-pay-1uztvkj">
                <h2 className="chakra-heading just-pay-11iu74w">
                  <span className="just-pay-vkkrz3">4</span>
                  <span className="just-pay-p3vkp9">Masukkan Nomor WhatsApp</span>
                </h2>
                <div className="just-pay-1rwovhe">
                  <div className="chakra-stack just-pay-owjkmg">
                    <div role="group" className="chakra-form-control just-pay-1kxonj9">
                      <input
                        type="number"
                        placeholder="Nomor WhatsApp"
                        id="phoneNumber"
                        className="chakra-input just-pay-1pwkzcn"
                        defaultValue=""
                        aria-describedby="phone_number-helptext"
                        {...form.register('phoneNumber', {
                          required: '* required',
                        })}
                      />
                      <div
                        id="phone_number-helptext"
                        className="chakra-form__helper-text just-pay-1y1zyf5"
                      >
                        Bukti pembayaran atas pembelian anda akan kami kirimkan ke WhatsApp anda.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VOUCHER */}
              <hr className="just-pay-z4a72a" />
              <div className="just-pay-1uztvkj">
                <h2 className="chakra-heading just-pay-11iu74w">
                  <span className="just-pay-vkkrz3">5</span>
                  <span className="just-pay-p3vkp9">Voucher</span>
                </h2>
                <div className="just-pay-1rwovhe">
                  <div role="group" className="chakra-form-control just-pay-1kxonj9">
                    <input
                      placeholder="Voucher"
                      id="voucher"
                      className="chakra-input just-pay-1pwkzcn"
                      aria-describedby="voucher-helptext"
                      defaultValue=""
                      {...form.register('voucher')}
                    />
                    <div
                      id="voucher-helptext"
                      className="chakra-form__helper-text just-pay-1y1zyf5"
                    >
                      Abaikan apabila tidak memiliki kode voucher
                    </div>
                  </div>
                </div>
              </div>

              {/* SUBMIT ORDER */}
              <div id="btn-order" className="just-pay-19655n4 z-[1200]">
                <div className="just-pay-1fbseht">
                  <Button
                    isLoading={orderPreparation.isLoading}
                    loadingText="Checking Username"
                    onClick={form.handleSubmit((e) => {
                      orderPreparation.mutate(
                        {
                          userData: { ...e.data },
                          productCode: product.code,
                        },
                        {
                          onSuccess: (res) => {
                            if (res.message !== 'Success')
                              throw new Error('Username Tidak Ditemukan');

                            form.setValue('username', res.data);
                            disclosure.onOpen();
                          },
                          onError: () => showErrorCheckUsername(),
                        },
                      );
                    }, showErrorForm)}
                    type="submit"
                    className="just-pay-1hy3qdb"
                  >
                    Beli Sekarang
                  </Button>
                </div>
              </div>
            </form>
          </main>
        </div>
        {selectedDM && selectedPayment && isSubmitSuccessful && (
          <ModalOrderConfirmation
            isLoading={submitOrder.isLoading}
            useDisclosure={disclosure}
            // onConfirm={(phoneNumberAdmin) => sendWA(phoneNumberAdmin)}
            onConfirm={() =>
              selectedPayment.group === 'banktransfer'
                ? sendWA(WHATSAPP_NO_ADMIN_1)
                : submitOrder.mutate(payloadOrder)
            }
            payload={payloadOrder}
            orderDetail={{
              productName: selectedDM.name,
              productPrice: selectedDM.price,
              paymentMethod: selectedPayment.name,
            }}
          />
        )}
      </div>
    </>
  );
}
