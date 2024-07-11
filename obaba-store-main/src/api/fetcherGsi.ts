/* eslint-disable no-param-reassign */
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const fetcherGsi = axios.create({
  baseURL: process.env.BASE_API || publicRuntimeConfig.BASE_API, // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
fetcherGsi.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers.origin = 'https://gamestoreindonesia.com';
  config.headers.referer = 'https://gamestoreindonesia.com';

  return config;
});
fetcherGsi.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export default fetcherGsi;
