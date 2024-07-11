import '@/styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import Layout from '@/components/layout/layout';
import getQueryClient from '@/config/react-query';
import { CSSReset } from '@/theme/CSSReset';

const queryClient = getQueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo
          defaultTitle="Obaba Store Indonesia | Top Up ML Termurah Se-JagadRaya !!"
          titleTemplate="%s | Obaba Store Indonesia"
          description={
            process.env.NEXT_PUBLIC_SEO_DEFAULT_DESCRIPTION ||
            'Setiap bulannya, jutaan gamers menggunakan Obaba Store Indonesia untuk melakukan pembelian kredit game dengan lancar: tanpa registrasi ataupun log-in, dan kredit permainan akan ditambahkan secara instan. Top-up Mobile Legends, Free Fire, Ragnarok M, dan berbagai game lainnya!'
          }
        />
        <ChakraProvider resetCSS={false}>
          <CSSReset />
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </ChakraProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}
