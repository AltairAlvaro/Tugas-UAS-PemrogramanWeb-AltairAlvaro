/* eslint-disable no-underscore-dangle */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import Client2Captcha from '@infosimples/node_two_captcha';
import { CAPTCHA_GOOGLE_KEY } from '@/config/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Declare your client
    const client = new Client2Captcha('11bec01084af65ed38491c7eec87e980', {
      timeout: 60_000,
      polling: 5000,
      throwErrors: true,
    });

    const decoded = await client
      .decodeRecaptchaV2({
        googlekey: CAPTCHA_GOOGLE_KEY,
        pageurl: 'https://gamestoreindonesia.com/account/auth/login',
      })
      .then((resp: any) => resp._text);

    res.status(200).send({ decoded, message: 'ok' });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
