/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import fetcherGsi from '@/api/fetcherGsi';
import fetcherTripay from '@/api/fetcherTripay';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const history = await fetcherGsi
      .get(`/v1/order/history`, {
        params: { ...req.query },
      })
      .then((resp) => resp.data);

    const tripayHistory = await fetcherTripay
      .get('/merchant/transactions', {
        params: {
          page: req.query.page,
          per_page: req.query.limit,
          sort: 'desc',
        },
      })
      .then((resp) => resp.data);

    res.status(200).send({ history, tripayHistory });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
