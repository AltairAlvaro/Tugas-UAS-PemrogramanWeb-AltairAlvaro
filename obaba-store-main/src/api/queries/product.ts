import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { PRODUCT_ITEMS_AVAILABLE } from '@/config/product-items';
import { Product, ProductItem } from '@/types/product';

type QueryProductFilter = {
  slug: string;
};

type FetchProductResponse = {
  data: Product;
};

export type QueryProductKey = ['product', QueryProductFilter];
export type QueryProductData = FetchProductResponse['data'];

export const fetchProduct = async (ctx: QueryFunctionContext<QueryProductKey>) => {
  const { slug } = ctx.queryKey[1];

  const product = await fetcherGsi
    .get<unknown, FetchProductResponse>(`/v1/product/${slug}`)
    .then((res) => res.data);

  return {
    ...product,
    items: product.items
      .map((item: ProductItem) => {
        const qtyDiamond = item.name.split(' ')[0];
        const availableProductItem = PRODUCT_ITEMS_AVAILABLE[product.slug]?.find(
          (availableItem) => availableItem.name === qtyDiamond || availableItem.name === item.name,
        );

        return {
          ...item,
          smileCode: availableProductItem?.smileCode || '',
          price: availableProductItem?.price || item.price,
        };
      })
      .filter((item) => (PRODUCT_ITEMS_AVAILABLE[product.slug] ? item.smileCode !== '' : true)),
  };
};

export const useQueryProduct = (filter: QueryProductFilter) =>
  useQuery<QueryProductData, unknown, QueryProductData, QueryProductKey>(
    ['product', filter],
    fetchProduct,
    {
      retry: 1,
    },
  );
