/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import fetcherGsi from '@/api/fetcherGsi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productCode, userData } = req.body;

  try {
    const orderPrepare = await fetcherGsi
      .get(`/v1/order/prepare/${productCode.replace('_X', '')}`, {
        params: { ...userData },
      })
      .then((resp) => resp.data);

    res.status(200).send(orderPrepare);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
