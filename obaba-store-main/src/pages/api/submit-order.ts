/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'node:crypto';

import fetcherGsi from '@/api/fetcherGsi';
import fetcherTripay from '@/api/fetcherTripay';
import {
  TRIPAY_API_KEY,
  TRIPAY_MERCHANT_ID,
  TRIPAY_PAYMENT_CHANNEL,
  TRIPAY_PRIVATE_KEY,
} from '@/config/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const submitOrder = await fetcherGsi.post('/v1/order', req.body).then((resp) => resp.data);

    const orderId = `${submitOrder.data}`;
    // console.log(orderId);
    const tripay = await requestPaymentTripay(orderId, req.body);
    res.status(200).send(tripay);
  } catch (error: any) {
    res.status(500).json({
      message: error?.response?.data?.message ?? error.message,
    });
  }
}

const requestPaymentTripay = async (orderId: string, body: { smileCode: string }) => {
  const orderDetail = await fetcherGsi.get(`/v1/order/${orderId}`).then((resp) => resp.data);

  const apiKey = TRIPAY_API_KEY;
  const privateKey = TRIPAY_PRIVATE_KEY;
  const merchantCode = TRIPAY_MERCHANT_ID;
  const expiry = Number(Math.floor(Date.now() / 1000) + 24 * 60 * 60);

  const { productDetail, phoneNumber, uniqueCode, paymentChannel } = orderDetail;
  const paymentMethod =
    TRIPAY_PAYMENT_CHANNEL[paymentChannel.code as keyof typeof TRIPAY_PAYMENT_CHANNEL] ||
    paymentChannel.code;

  const calculatedFee = await getFee({ price: productDetail.productItem.price, paymentMethod });

  const amount = productDetail.productItem.price + calculatedFee + uniqueCode;

  const orderItemDetail = [
    {
      name: `${productDetail.productName} - ${productDetail.productItem.name}`,
      price: amount,
      quantity: 1,
    },
  ];

  const merchantRef = `${orderId}${body.smileCode ? `-${body.smileCode}` : ''}`;
  const signature = crypto
    .createHmac('sha256', privateKey)
    .update(`${merchantCode}${merchantRef}${amount}`)
    .digest('hex');

  const payload = {
    method: paymentMethod,
    merchant_ref: merchantRef,
    amount,
    customer_name: phoneNumber,
    customer_email: 'obabastore.indonesia@gmail.com',
    customer_phone: phoneNumber,
    order_items: orderItemDetail,
    // callback_url: 'https://f76f7b2cdc20.ngrok.io/api/payment/paycallback',
    // return_url: 'https://f76f7b2cdc20.ngrok.io/api/payment/redirect',
    expired_time: expiry,
    signature,
  };

  // console.log(JSON.stringify(payload), `${apiKey}`);
  return fetcherGsi
    .post('https://tripay.co.id/api/transaction/create', JSON.stringify(payload), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then(async (resp) => resp.data)
    .catch((error: any) => {
      throw new Error(`Tripay: ${error?.response?.data?.message ?? error.message}`);
    });
};

const getFee = async ({ price, paymentMethod }: any) => {
  const tripayPaymentChannels = await fetcherTripay
    .get(`/merchant/payment-channel?code=${paymentMethod}`)
    .then((resp) => resp.data)
    .catch((error: any) => {
      throw new Error(`Tripay: ${error?.response?.data?.message ?? error.message}`);
    });

  if (tripayPaymentChannels.data.length === 0)
    throw new Error(`Tripay: Payment channel ${paymentMethod} not available`);

  const tripayPaymentChannel = tripayPaymentChannels.data[0];
  const fee =
    tripayPaymentChannel.fee_merchant.flat +
    price * (tripayPaymentChannel.fee_merchant.percent / 100);

  return Math.round(fee);
};
