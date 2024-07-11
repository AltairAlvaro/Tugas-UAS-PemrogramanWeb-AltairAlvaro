/* eslint-disable no-param-reassign */
import axios from 'axios';

import { APIGAMES_MERCHANT_ID, BASE_APIGAMES_API } from '@/config/constants';

const fetcherApiGames = axios.create({
  baseURL: BASE_APIGAMES_API, // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
fetcherApiGames.interceptors.request.use((config) => {
  if (config.method === 'POST') {
    config.data = config.data ?? {};
    config.data.merchant_id = APIGAMES_MERCHANT_ID;
    config.data.server_id = config.data.server_id ?? '';
  }

  return config;
});
fetcherApiGames.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export default fetcherApiGames;
