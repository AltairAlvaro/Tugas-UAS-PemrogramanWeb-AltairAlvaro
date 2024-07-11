/* eslint-disable no-param-reassign */
const nextPWA = require('next-pwa');

const runtimeCaching = require('./next-pwa.cache');

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  publicRuntimeConfig: {
    BASE_API: process.env.BASE_API,
    BASE_API_TOKEN: process.env.BASE_API_TOKEN,
    BASE_TRIPAY_API: process.env.BASE_TRIPAY_API,
    BASE_URL: process.env.BASE_URL,
    WHATSAPP_NO_ADMIN_1: process.env.WHATSAPP_NO_ADMIN_1,
    WHATSAPP_NO_ADMIN_2: process.env.WHATSAPP_NO_ADMIN_2,
    GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID,
    TRIPAY_API_KEY: process.env.TRIPAY_API_KEY,
    TRIPAY_PRIVATE_KEY: process.env.TRIPAY_PRIVATE_KEY,
    TRIPAY_MERCHANT_ID: process.env.TRIPAY_MERCHANT_ID,
    TWO_CAPTCHA_PRIVATE_KEY: process.env.TWO_CAPTCHA_PRIVATE_KEY,
    CAPTCHA_GOOGLE_KEY: process.env.CAPTCHA_GOOGLE_KEY,
    BASE_APIGAMES_API: process.env.BASE_APIGAMES_API,
    APIGAMES_PRIVATE_KEY: process.env.APIGAMES_PRIVATE_KEY,
    APIGAMES_SIGNATURE: process.env.APIGAMES_SIGNATURE,
    APIGAMES_MERCHANT_ID: process.env.APIGAMES_MERCHANT_ID,
  },
  compiler: {
    emotion: true,
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['api.gamestoreindonesia.com', 'api-bisnis.vocagame.com', 'sin1.contabostorage.com'],
  },
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/media/:path*',
  //       headers: [
  //         {
  //           key: 'Referer',
  //           value: 'https://gamestoreindonesia.com',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/media/:path*',
  //       destination: 'https://api.gamestoreindonesia.com/media/:path*',
  //     },
  //   ];
  // },
};

module.exports = withPWA(nextConfig);
