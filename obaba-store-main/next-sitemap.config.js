const products = require('./public/generated/products.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL,
  generateRobotsTxt: true,
  additionalPaths: () =>
    products.map((slug) => ({
      loc: `/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    })),
};
