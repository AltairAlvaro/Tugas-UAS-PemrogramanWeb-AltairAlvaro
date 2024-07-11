import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { Product } from '@/types/product';

type QueryProductsFilter = {
  q?: string;
};

type FetchProductsResponse = {
  data: Product[];
};

export type QueryProductsKey = ['products', QueryProductsFilter];
export type QueryProductsData = FetchProductsResponse['data'];

export const fetchProducts = async (ctx: QueryFunctionContext<QueryProductsKey>) => {
  const { q } = ctx.queryKey[1];

  const Products = await fetcherGsi
    .get<unknown, FetchProductsResponse>(`/v1/product?q=${q}`)
    .then((res) => res.data);

  return Products;
};

export const useQueryProducts = (filter: QueryProductsFilter) =>
  useQuery<QueryProductsData, unknown, QueryProductsData, QueryProductsKey>(
    ['products', filter],
    fetchProducts,
    {
      retry: 1,
    },
  );
