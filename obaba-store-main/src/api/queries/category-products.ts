import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { CategoryProducts } from '@/types/category-products';

type QueryCategoryProductsFilter = {
  q?: string;
};

type FetchCategoryProductsResponse = {
  data: CategoryProducts[];
};

export type QueryCategoryProductsKey = ['category-products', QueryCategoryProductsFilter];
export type QueryCategoryProductsData = FetchCategoryProductsResponse['data'];

export const fetchCategoryProducts = async (
  ctx: QueryFunctionContext<QueryCategoryProductsKey>,
) => {
  const { q } = ctx.queryKey[1];

  const categoryProducts = await fetcherGsi
    .get<unknown, FetchCategoryProductsResponse>(`/v1/category/product?q=${q}`)
    .then((res) => res.data);

  return categoryProducts;
};

export const useQueryCategoryProducts = (filter: QueryCategoryProductsFilter) =>
  useQuery<QueryCategoryProductsData, unknown, QueryCategoryProductsData, QueryCategoryProductsKey>(
    ['category-products', filter],
    fetchCategoryProducts,
    {
      retry: 1,
    },
  );
