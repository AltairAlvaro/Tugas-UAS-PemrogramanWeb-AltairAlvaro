import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { GOOGLE_MEASUREMENT_ID } from '@/config/constants';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Obaba Store" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Obaba Store" />
        <meta name="description" content="Obaba Store | Top Up Diamond ML Paling Murah !!!" />
        <meta name="theme-color" content="#ffffff" key="meta:theme-color" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/favicons/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/api/media/gsi1-min-1009d.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/api/media/gsi1-min-1009d.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/api/media/gsi1-min-1009d.png" />
        <meta name="msapplication-TileColor" content="#1c1c1c" />
        <meta name="theme-color" content="#5f6783" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="Top Up Mobile Legends Termurah Se-JagadRaya | Free Fire Murah"
        />
        <meta property="og:title" content="Obaba Store" />
        <meta
          property="og:description"
          content="Top Up Mobile Legends Termurah Se-JagadRaya | Free Fire Murah"
        />
        <meta property="og:image" content="/images/1.png" />
        <meta property="og:image:alt" content="Obaba Store" />
        <meta property="og:image:secure_url" content="/images/1.png" />
        <meta property="og:site_name" content="Obaba Store" />
        <meta
          name="Obaba Store Indonesia"
          content="Situs terkemuka layanan Top Up Voucher Game dengan lancar. Tanpa registrasi atau Log-in diproses secara instant. Top-up Mobile Legends, Free Fire, PUBG Mobile dan berbagai game lainnya!"
        />
        <meta name="next-head-count" content="18" />

        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GOOGLE_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.toggle('dark', localStorage.theme === 'dark');
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
