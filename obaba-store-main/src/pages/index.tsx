/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { fetchCategoryProducts } from '@/api/queries/category-products';
import { fetchPaymentChannels } from '@/api/queries/payment-channels';
import { PRODUCTS_EXCEPTION } from '@/config/products';
import getQueryClient from '@/config/react-query';
import { CategoryProducts } from '@/types/category-products';
import { PaymentChannels } from '@/types/payment-channels';

import { Loader } from './components/loader';

export async function getStaticProps() {
  const queryClient = getQueryClient();
  const categoryProducts = await queryClient.fetchQuery(
    ['category-products', { q: '' }],
    fetchCategoryProducts,
  );

  const paymentChannels = await queryClient.fetchQuery(
    ['payment-channels', { q: '' }],
    fetchPaymentChannels,
  );

  // const plaiceholder = '/images/banner-home.png';
  // const { img } = await getPlaiceholder(extractImgSrc(plaiceholder));

  return {
    props: {
      categoryProducts,
      paymentChannels,
      // banner: img,
    },
    revalidate: 30,
  };
}

type Props = {
  categoryProducts: CategoryProducts[];
  paymentChannels: PaymentChannels;
};

/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomePage({ categoryProducts, paymentChannels }: Props) {
  const [search, setSearch] = useState('');

  const router = useRouter();
  if (router.isFallback) return <Loader />;

  const allProducts = categoryProducts;
  // const allPaymentChannels = paymentChannels.filter((pc) => !['qris', 'wallet'].includes(pc.group));

  return (
    <>
      <div className="just-pay-1dnzllm" />
      <header className="just-pay-1bdn2to">
        <div className="chakra-stack just-pay-foe16h">
          <div className="just-pay-1ki54i">
            <div className="just-pay-1dfetik">
              <Image
                alt="Logo"
                width={176}
                height={42}
                src="/images/logo-transparent.png"
                className="chakra-image just-pay-akxtnp"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="just-pay-cmxy85">
        <main className="just-pay-zke1y">
          <section className="chakra-input__group just-pay-1k4960">
            <div className="chakra-input__left-element just-pay-r5ogvh">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                </g>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari ..."
              className="chakra-input just-pay-tu0gy8"
            />
          </section>
          <div className="banner">
            <Image
              src="/images/banner-home.png"
              width={448}
              height={180}
              alt="Banner Obaba Store Indonesia"
              priority
            />
          </div>

          {allProducts.map((ap) => (
            <section key={ap.name} className="just-pay-1lp32oh">
              <h1 className="chakra-heading just-pay-u4lanl">{ap.name}</h1>

              <div className="just-pay-2uen4m">
                {ap.products
                  .filter((product) => !PRODUCTS_EXCEPTION.includes(product.slug))
                  .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
                  .map((product) => {
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    if (PRODUCTS_EXCEPTION.includes(product.slug)) {
                      return <div className="hidden" key={product.slug} />;
                    }

                    return (
                      <a key={product.id} href={`/${product.slug}`}>
                        <div className="just-pay-7t7p9j">
                          <div role="group" className="just-pay-8kumxk">
                            <div className="just-pay-1x0q45o">
                              <div className="just-pay-gmuwbf">
                                <Image
                                  alt={product.code}
                                  // src={product.logoUrl.replace(`${BASE_API}/media/`, '/api/media/')}
                                  src={product.logoUrl}
                                  width={56}
                                  height={56}
                                  loading="lazy"
                                  className="chakra-image just-pay-1skio6j"
                                  // placeholder="blur"
                                />
                              </div>
                            </div>
                            <div className="chakra-stack just-pay-1rks8l4">
                              <p className="chakra-text just-pay-13nqgyd">{product.subTitle}</p>
                              <h2 className="chakra-heading just-pay-16hdxoc">{product.title}</h2>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </section>
          ))}
          {/* <hr className="just-pay-z4a72a" /> */}
          {/* <section className="just-pay-1v7r4tf">
            <div className="just-pay-gmuwbf">
              <h2 className="chakra-heading just-pay-rr3zeo">Metode Pembayaran</h2>
            </div>
            <div
              className={cx(
                'just-pay-amcue',
                css`
                  overflow: hidden;
                  touch-action: pan-y;
                `,
              )}
            >
              <Slider
                autoSlide={{ interval: 1500, reverse: true }}
                slidesToShow={4}
                buttons={false}
              >
                {allPaymentChannels.slice(0, 12).map((paymentChannel) => (
                  <div
                    key={paymentChannel.id}
                    className={css`
                      box-sizing: border-box;
                      flex: 1 1 0%;
                      padding-right: 12px;
                      width: 100%;
                      height: 70px;
                    `}
                  >
                    <Image
                      alt={paymentChannel.name}
                      // src={paymentChannel.iconUrl
                      //   .replace('http://', 'https://')
                      //   .replace(`${BASE_API}/media/`, '/api/media/')}
                      src={paymentChannel.iconUrl}
                      width={100}
                      height={60}
                      loading="lazy"
                      className="chakra-image just-pay-1idcjfm"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div
              className={cx(
                'just-pay-amcue',
                css`
                  overflow: hidden;
                  touch-action: pan-y;
                `,
              )}
            >
              <Slider
                autoSlide={{ interval: 1300, reverse: true }}
                slidesToShow={4}
                buttons={false}
              >
                {allPaymentChannels.slice(13, 23).map((paymentChannel) => (
                  <div
                    key={paymentChannel.id}
                    className={css`
                      box-sizing: border-box;
                      flex: 1 1 0%;
                      padding-right: 12px;
                      width: 100%;
                      height: 70px;
                    `}
                  >
                    <Image
                      alt={paymentChannel.name}
                      // src={paymentChannel.iconUrl
                      //   .replace('http://', 'https://')
                      //   .replace(`${BASE_API}/media/`, '/api/media/')}
                      src={paymentChannel.iconUrl}
                      width={100}
                      height={60}
                      loading="lazy"
                      className="chakra-image just-pay-1idcjfm"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </section> */}
        </main>
      </div>
    </>
  );
}
