/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import fetcherGsi from '@/api/fetcherGsi';
import fetcherTripay from '@/api/fetcherTripay';
import { TRIPAY_STATUS } from '@/config/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const trxId = `${req.query['trx-id']}`;

  try {
    const tripayTransaction = await fetchTripayTransactionList(`${trxId}`);
    if (!tripayTransaction) throw new Error('Tripay: data transaction not found');

    const tripayDetail = await fetchTripayDetail(`${tripayTransaction.reference}`);
    if (!tripayDetail) throw new Error('Tripay: data transaction not found');

    const orderId = trxId.split('-')[0];
    const orderDetail = await fetcherGsi.get(`/v1/order/${orderId}`).then((resp) => resp.data);

    const tripayStatus = tripayDetail.data.status;

    res.status(200).send({
      ...orderDetail,
      reference: tripayTransaction.reference,
      status: TRIPAY_STATUS[tripayStatus as keyof typeof TRIPAY_STATUS],
      actionPayment: {
        ...orderDetail.actionPayment,
        qrString: tripayDetail.data.qr_string,
        qrUrl: tripayDetail.data.qr_url,
        paymentDirect: tripayDetail.data.pay_url,
      },
      totalAmount: tripayDetail.data.amount,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error?.response?.data?.message ?? error.message,
    });
  }
}

const fetchTripayTransactionList = async (trxId: string) =>
  fetcherTripay
    .get(`/merchant/transactions?merchant_ref=${trxId}`)
    .then((resp) => resp.data.data?.[0] || undefined)
    .catch((error: any) => {
      throw new Error(`Tripay: ${error?.response?.data?.message ?? error.message}`);
    });

const fetchTripayDetail = async (reference: string) =>
  fetcherTripay
    .get(`/transaction/detail?reference=${reference}`)
    .then((resp) => resp.data)
    .catch((error: any) => {
      throw new Error(`Tripay: ${error?.response?.data?.message ?? error.message}`);
    });
