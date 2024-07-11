/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Text, useToast } from '@chakra-ui/react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { useQueryOrderDetail } from '@/api/queries/order-detail';
import { QRCode } from '@/components/qr-code';
import { BASE_API, WHATSAPP_NO_ADMIN_1 } from '@/config/constants';

import Error404Page from './404';
import { Loader } from './components/loader';

export default function Waiting() {
  const router = useRouter();
  const toast = useToast();
  const { trxId } = router.query;

  const queryOrderDetail = useQueryOrderDetail({
    trxId: trxId as string,
  });
  const { data } = queryOrderDetail || {};

  const calculateDuration = (eventTime: number) =>
    moment.duration(Math.max(eventTime - Math.floor(Date.now() / 1000), 0), 'seconds');

  const endTime = moment(data?.expiredAt).unix();
  const [duration, setDuration] = useState(calculateDuration(endTime));
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(endTime));
  }, [endTime]);

  useEffect(() => {
    const countdownInterval = setInterval(timerCallback, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTime]);

  const refetchOrderDetail = useCallback(() => {
    if (queryOrderDetail.data?.status?.toLowerCase() !== 'telah dibayar')
      queryOrderDetail.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryOrderDetail.isFetching]);

  useEffect(() => {
    const countdownInterval = setInterval(refetchOrderDetail, 10_000);

    return () => {
      clearInterval(countdownInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryOrderDetail.isFetching]);

  const copyToClipboard = ({ name, content }: { name: string; content: string }) => {
    navigator.clipboard.writeText(content);
    toast({
      title: `${name} copied`,
      status: 'info',
      duration: 500,
      position: 'top',
    });
  };

  if (!queryOrderDetail.isLoading && !queryOrderDetail.data)
    return (
      <>
        <div className="just-pay-1dnzllm" />
        <header className="just-pay-1bdn2to">
          <div className="chakra-stack just-pay-foe16h">
            <div className="just-pay-1ki54i">
              <div className="just-pay-2woq68">
                <button
                  type="button"
                  className="chakra-button just-pay-15kbwye"
                  aria-label="Back"
                  onClick={() => router.back()}
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
              <div className="just-pay-1dfetik">
                <Image
                  alt="Logo"
                  width={176}
                  height={42}
                  src="/images/logo-transparent.png"
                  className="chakra-image just-pay-akxtnp"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="xxx-cmxy85">
          <main className="xxx-11jerl1">
            <Error404Page />
          </main>
        </div>
      </>
    );

  return (
    <>
      <div className="just-pay-1dnzllm" />
      <header className="just-pay-1bdn2to">
        <div className="chakra-stack just-pay-foe16h">
          <div className="just-pay-1ki54i">
            <div className="just-pay-2woq68">
              <button
                type="button"
                className="chakra-button just-pay-15kbwye"
                aria-label="Back"
                onClick={() => router.back()}
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
            <div className="just-pay-1dfetik">
              <Image
                alt="Logo"
                width={176}
                height={42}
                src="/images/logo-transparent.png"
                className="chakra-image just-pay-akxtnp"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="xxx-cmxy85">
        <main className="xxx-11jerl1">
          {queryOrderDetail.isLoading && <Loader />}
          {!queryOrderDetail.isLoading && (
            <div className="xxx-819fxu">
              <div className="xxx-wjx3om">
                <Image
                  alt="Logo"
                  width={80}
                  height={80}
                  // src={
                  //   data?.productDetail.product.logoUrl
                  //     .replace('http:', 'https:')
                  //     .replace(`${BASE_API}/media/`, '/api/media/') || ''
                  // }
                  src={data?.productDetail.product.logoUrl || ''}
                  className="chakra-image xxx-9r15ii"
                />
              </div>
              <div className="xxx-1nfk9g0">
                <div className="chakra-stack xxx-i75blt">
                  <h2 className="chakra-heading xxx-hktpdg">{data?.productDetail.product.title}</h2>
                  <Text className="xxx-78ya9x">{data?.productDetail.product.subTitle}</Text>
                </div>
              </div>
              <div className="xxx-1rvckmy">
                <div className="xxx-h94677">
                  <h2 className="chakra-heading xxx-hezt1y">Selesaikan Pembayaran Sebelum</h2>
                  <Text className="xxx-1qec887">
                    {moment(data?.expiredAt).format('DD MMMM YYYY')}
                  </Text>
                  <span className="chakra-text xxx-s9a7wg">
                    Harap selesaikan transaksi Anda dalam waktu &nbsp;{' '}
                    <b>
                      <span>{`${moment.utc(duration.asMilliseconds()).format('HH:mm:ss')}`}</span>
                    </b>
                  </span>
                  {/* <div className="xxx-13z86f2">
                    <Image
                      alt="Payment Logo"
                      width={163}
                      height={48}
                      // src={
                      //   data?.paymentChannel.iconUrl
                      //     .replace('http:', 'https:')
                      //     .replace(`${BASE_API}/media/`, '/api/media/') || ''
                      // }
                      src={data?.paymentChannel.iconUrl || ''}
                      className="chakra-image xxx-18thcfw"
                    />
                  </div> */}
                </div>
                <div className="chakra-stack xxx-upsten">
                  <div className="xxx-wbncsf">
                    <Text className="xxx-13brihr">Invoice ID</Text>
                    <div className="xxx-17xejub" />
                    <div
                      role="none"
                      className="xxx-7v70o1"
                      onClick={() => {
                        copyToClipboard({ name: 'Invoice ID', content: data?.invoiceId || '' });
                      }}
                    >
                      <Text className="xxx-35ezg3">{data?.invoiceId}</Text>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon xxx-15ffmq"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="xxx-wbncsf">
                    <Text className="xxx-13brihr">Status Pesanan</Text>
                    <div className="xxx-17xejub" />
                    <div className="xxx-u4p24i">
                      <Text className="xxx-35ezg3">{data?.status || 'Belum Selesai'}</Text>
                    </div>
                  </div>
                  <div className="xxx-wbncsf">
                    <Text className="xxx-13brihr">Metode Pembayaran</Text>
                    <div className="xxx-17xejub" />
                    <div className="xxx-u4p24i">
                      <Text className="xxx-35ezg3">{data?.paymentChannel.name}</Text>
                    </div>
                  </div>
                  {data?.paymentChannel.group === 'va' ||
                    (data?.paymentChannel.group === 'cstore' && (
                      <div className="xxx-wbncsf">
                        <Text className="xxx-13brihr">Kode Virtual Account</Text>
                        <div className="xxx-17xejub" />
                        <div
                          role="none"
                          className="xxx-episto"
                          onClick={() => {
                            copyToClipboard({
                              name: 'Kode Virtual Account',
                              content: data?.actionPayment?.virtualAccount || '',
                            });
                          }}
                        >
                          <Text className="xxx-35ezg3">{data?.actionPayment?.virtualAccount}</Text>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            focusable="false"
                            className="chakra-icon xxx-15ffmq"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    ))}
                  <div className="xxx-wbncsf">
                    <Text className="xxx-13brihr">User ID</Text>
                    <div className="xxx-17xejub" />
                    <div className="xxx-u4p24i">
                      <Text className="xxx-35ezg3">
                        {data?.productDetail.data.userId}
                        {data?.productDetail.data.zoneId && ` (${data.productDetail.data.zoneId})`}
                      </Text>
                    </div>
                  </div>
                  <div className="xxx-wbncsf">
                    <Text className="xxx-13brihr">Pembelian</Text>
                    <div className="xxx-17xejub" />
                    <div className="xxx-u4p24i">
                      <Text className="xxx-35ezg3">{data?.productDetail.productItemName}</Text>
                    </div>
                  </div>
                </div>
                <div className="xxx-8a8e5p">
                  <h2 className="chakra-heading xxx-29ieiv">Detail Pembayaran</h2>
                  <div className="chakra-stack xxx-n21gh5">
                    <div className="xxx-wbncsf">
                      <Text className="xxx-13brihr">Total Pembayaran</Text>
                      <div className="xxx-17xejub" />
                      <div
                        role="none"
                        className="xxx-1h6u5ao"
                        onClick={() => {
                          copyToClipboard({
                            name: 'Total Pembayaran',
                            content: `${data?.totalAmount || ''}`,
                          });
                        }}
                      >
                        <Text className="xxx-35ezg3">
                          Rp&nbsp;{Number(data?.totalAmount).toLocaleString('id-ID')},-
                        </Text>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon xxx-15ffmq"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    {data?.paymentChannel.group === 'qris' && (
                      <QRCode qrString={data.actionPayment?.qrString || '-'} />
                    )}
                  </div>
                  <Text className="xxx-a4pf6d">
                    Pembelian: {moment(data?.createdDate).format('DD MMMM YYYY')}
                  </Text>
                  {data?.paymentChannel.group === 'ewallet' && (
                    <Button
                      type="button"
                      className="just-pay-ngcla3 mt-5 w-full"
                      onClick={() => {
                        const link = `${data?.actionPayment?.paymentDirect}`;
                        window.open(link, '_blank');
                      }}
                    >
                      Lanjutkan Pembayaran
                    </Button>
                  )}
                </div>
                <div className="xxx-8a8e5p">
                  <Button
                    type="button"
                    className="just-pay-ngcla3 w-full"
                    onClick={() => {
                      const message = `Halo min saya butuh bantuan, ini Invoice ID nya ${data?.invoiceId} `;
                      const link = `https://wa.me/${WHATSAPP_NO_ADMIN_1}?text=${encodeURIComponent(
                        message,
                      )}`;
                      window.open(link, '_blank');
                    }}
                  >
                    Butuh Bantuan ?
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
