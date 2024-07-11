/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { cx } from '@emotion/css';
import moment from 'moment';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useQueryHistory } from '@/api/queries/order-history';
import { TRIPAY_STATUS } from '@/config/constants';

import { Loader } from './components/loader';

export default function History() {
  const router = useRouter();
  const form = useForm({ mode: 'onChange' });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const [showHistory, setShowHistory] = useState(false);
  const { phoneNumber } = router.query;

  const queryHistory = useQueryHistory({
    phoneNumber: phoneNumber as string,
  });

  useEffect(() => {
    setShowHistory(!!phoneNumber);
  }, [phoneNumber]);

  const { history = { items: [] }, tripayHistory } = queryHistory.data || {};
  return (
    <>
      <NextSeo
        title="Lacak Pesananmu"
        description="Top Up dengan GoPay, ShopeePay, Dana, OVO, LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet. Tanpa perlu registrasi ataupun log-in."
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
        <header className="xxx-181yzww">
          <div className="chakra-stack xxx-foe16h">
            <div className="xxx-1ki54i">
              <h1 className="chakra-text xxx-w6oofq">Riwayat</h1>
            </div>
          </div>
        </header>
        <div className="xxx-1uprr4o">
          <main className="xxx-zke1y">
            {queryHistory.isFetching && <Loader />}
            <div
              className={cx('xxx-rs70m2', {
                hidden:
                  queryHistory.isFetching || (!queryHistory.isFetching && history.items.length > 0),
              })}
            >
              <form className="chakra-stack xxx-1tds2la">
                <h2 className="chakra-heading xxx-yo6ywq">Lacak pesanan anda</h2>
                <FormControl className="xxx-1kxonj9" isInvalid={errors.phoneNumber !== undefined}>
                  <FormLabel htmlFor="phoneNumber" className="xxx-2gx1h6">
                    Phone Number
                  </FormLabel>
                  <Input
                    id="phoneNumber"
                    className="xxx-1pwkzcn"
                    placeholder=""
                    {...form.register('phoneNumber', {
                      // onChange: ({ target }) =>
                      //   form.setValue('phoneNumber', phoneNumberParser(target.value)),
                      required: 'Phone number is required',
                      minLength: {
                        value: 8,
                        message: 'Phone number is not valid',
                      },
                      pattern: {
                        value: /^0\d.*$/,
                        message: 'Phone number is not valid', // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <FormErrorMessage>{`${errors.phoneNumber.message}`}</FormErrorMessage>
                  )}
                </FormControl>
                <div className="chakra-stack xxx-b5leqj">
                  <Button
                    disabled={errors.phoneNumber !== undefined}
                    type="submit"
                    className="xxx-v6uimk"
                    isLoading={queryHistory.isFetching}
                    loadingText="loading"
                    onClick={handleSubmit((data) => {
                      window.location.href = `/history?phoneNumber=${data.phoneNumber}`;
                    })}
                  >
                    Lacak Pesanan
                  </Button>
                </div>
              </form>
            </div>
            {showHistory && !queryHistory.isFetching && history.items.length > 0 && (
              <VStack className="xxx-180qt1h">
                {history.items.map((item) => {
                  const tripayData = tripayHistory?.data.find(
                    (th) => th.merchant_ref.split('-')[0] === item.invoiceId,
                  );
                  return (
                    <HStack
                      key={item.invoiceId}
                      className="xxx-xc0wna"
                      cursor="pointer"
                      onClick={() => router.push(`/waiting?trxId=${tripayData?.merchant_ref}`)}
                    >
                      <Image
                        alt="Logo"
                        // src={item.productDetail.product.logoUrl.replace(
                        //   `${BASE_API}/media/`,
                        //   '/api/media/',
                        // )}
                        src={item.productDetail.product.logoUrl}
                        loading="lazy"
                        className="xxx-4itngh"
                      />
                      <VStack className="xxx-10ubu2v" alignItems="start">
                        <Heading as="h2" size="sm" className="xxx-1389ja7">
                          {item.productDetail.product.title}
                        </Heading>
                        <Text className="xxx-s9a7wg">
                          {moment(item.createdDate).format('DD MMMM YYYY')}
                        </Text>
                      </VStack>
                      <HStack className="xxx-10odyks">
                        <Text whiteSpace="nowrap" className="xxx-1hszhjx">
                          {
                            TRIPAY_STATUS[
                              (tripayHistory?.data.find(
                                (th) => th.merchant_ref.split('-')[0] === item.invoiceId,
                              )?.status || 'undefined') as keyof typeof TRIPAY_STATUS
                            ]
                          }
                        </Text>
                        <ChevronRightIcon boxSize={6} />
                      </HStack>
                    </HStack>
                  );
                })}
              </VStack>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
