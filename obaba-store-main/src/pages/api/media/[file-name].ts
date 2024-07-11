/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

import fetcherGsi from '@/api/fetcherGsi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileName = req.query['file-name'];

  try {
    const resImg = await fetcherGsi
      .get(`/media/${fileName}`, {
        responseType: 'arraybuffer',
      })
      .then((img) => img);

    const imageBuffer = Buffer.from(resImg.data);
    res.setHeader('Content-Type', 'image/jpeg');
    res.status(200).send(imageBuffer);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
