/* eslint-disable no-param-reassign */
import axios from 'axios';

import { BASE_TRIPAY_API, TRIPAY_API_KEY } from '@/config/constants';

const fetcherTripay = axios.create({
  baseURL: BASE_TRIPAY_API, // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
fetcherTripay.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers.Authorization = `Bearer ${TRIPAY_API_KEY}`;

  return config;
});
fetcherTripay.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export default fetcherTripay;
