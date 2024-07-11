import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const {
  BASE_URL,
  BASE_API,
  BASE_API_TOKEN,
  BASE_TRIPAY_API,
  WHATSAPP_NO_ADMIN_1,
  WHATSAPP_NO_ADMIN_2,
  GOOGLE_MEASUREMENT_ID,
  TRIPAY_API_KEY,
  TRIPAY_PRIVATE_KEY,
  TRIPAY_MERCHANT_ID,
  TWO_CAPTCHA_PRIVATE_KEY,
  CAPTCHA_GOOGLE_KEY,
  BASE_APIGAMES_API,
  APIGAMES_PRIVATE_KEY,
  APIGAMES_SIGNATURE,
  APIGAMES_MERCHANT_ID,
} = publicRuntimeConfig;

export const TRIPAY_STATUS = {
  PAID: 'Telah Dibayar',
  UNPAID: 'Belum Dibayar',
  EXPIRED: 'Expired',
  undefined: 'Belum Dibayar',
};

export const TRIPAY_PAYMENT_CHANNEL = {
  ID_SHOPEEPAY: 'SHOPEEPAY',
  ID_OVO: 'OVO',
  BSI: 'BSIVA',
  BRI: 'BRIVA',
  MANDIRI: 'MANDIRIVA',
  PERMATA: 'PERMATAVA',
  BJB: 'BJBVA',
  QRIS: 'QRISC',
};
