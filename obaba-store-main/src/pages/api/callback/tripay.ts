/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Client2Captcha from '@infosimples/node_two_captcha';
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'node:crypto';

import fetcherApiGames from '@/api/fetcherApiGames';
import fetcherGsi from '@/api/fetcherGsi';
import {
  APIGAMES_MERCHANT_ID,
  APIGAMES_PRIVATE_KEY,
  CAPTCHA_GOOGLE_KEY,
  TRIPAY_PRIVATE_KEY,
  TWO_CAPTCHA_PRIVATE_KEY,
} from '@/config/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tripay = req.body;

  try {
    const callbackSignature = req.headers['x-callback-signature'];
    const signature = crypto
      .createHmac('sha256', TRIPAY_PRIVATE_KEY)
      .update(JSON.stringify(tripay))
      .digest('hex');

    if (callbackSignature !== signature) throw new Error('Invalid Signature');

    let submitOrder = {};
    const smileCode = tripay.merchant_ref.split('-')[1];

    if (tripay.status === 'PAID' && smileCode)
      submitOrder = await submitOrderToDistributorApiGames(tripay);
    else if (tripay.status === 'PAID' && !smileCode)
      submitOrder = await submitOrderToDistributorGSI(tripay);

    res.status(200).send({ ...submitOrder, success: true });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

const submitOrderToDistributorApiGames = async (tripay: any) => {
  const orderId = tripay.merchant_ref.split('-')[0];
  const smileCode = tripay.merchant_ref.split('-')[1];

  const orderDetail = await fetcherGsi.get(`/v1/order/${orderId}`).then((resp) => resp.data);

  const { productDetail } = orderDetail;

  const signature = crypto
    .createHash('md5')
    .update(`${APIGAMES_MERCHANT_ID}:${APIGAMES_PRIVATE_KEY}:${orderId}`)
    .digest('hex');

  const payload = {
    ref_id: orderId,
    merchant_id: APIGAMES_MERCHANT_ID,
    produk: smileCode,
    tujuan: productDetail.data.userId,
    server_id: productDetail.data.zoneId || '',
    signature,
  };

  return fetcherApiGames
    .post('/transaksi', payload)
    .then((resp) => resp.data)
    .catch((error: any) => {
      throw new Error(
        `Error While Submit Order to ApiGames: ${error?.response?.data?.message ?? error.message}`,
      );
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submitOrderToDistributorGSI = async (tripay: any) => {
  const orderId = tripay.merchant_ref.split('-')[0];

  const orderDetail = await fetcherGsi.get(`/v1/order/${orderId}`).then((resp) => resp.data);

  const captchaToken = await getCaptcha();

  const login = await fetcherGsi
    .post(
      '/v1/auth/member/login',
      {
        phoneNumber: '085288881217',
        password: 'Murahan123',
      },
      {
        headers: {
          'x-captcha-token': captchaToken,
        },
      },
    )
    .then((resp) => resp.data)
    .catch((error: any) => {
      throw new Error(`Get Token: ${error?.response?.data?.message ?? error.message}`);
    });

  const paymentChannels = await fetcherGsi.get('/v1/payment/channels').then((resp) => resp.data);
  const walletPayment = paymentChannels.find((p: any) => p.code === 'wallet');

  const payload = {
    data: {
      ...orderDetail.productDetail.data,
    },
    productId: orderDetail.productDetail.product.id,
    productItemId: orderDetail.productDetail.productItem.id,
    paymentChannelId: walletPayment.id,
    phoneNumber: '085288881217',
    voucher: '',
  };

  return fetcherGsi
    .post('/v1/order', payload, {
      headers: {
        Authorization: `Bearer ${login.token}`,
      },
    })
    .then((resp) => resp.data)
    .catch((error: any) => {
      throw new Error(`Submit Order: ${error?.response?.data?.message ?? error.message}`);
    });
};

const getCaptcha = async () => {
  const client = new Client2Captcha(TWO_CAPTCHA_PRIVATE_KEY, {
    timeout: 60_000,
    polling: 5000,
    throwErrors: true,
  });

  return client
    .decodeRecaptchaV2({
      googlekey: CAPTCHA_GOOGLE_KEY,
      pageurl: 'https://gamestoreindonesia.com/account/auth/login',
    })
    .then((resp: any) => resp._text)
    .catch((error: any) => {
      throw new Error(`Decode Captcha: ${error?.response?.data?.message ?? error.message}`);
    });
};
