import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { BASE_URL } from '@/config/constants';
import { History } from '@/types/history';

type QueryHistoryFilter = {
  phoneNumber: string;
  page?: number;
  limit?: number;
};

type FetchProductResponse = {
  data: History;
};

export type QueryHistoryKey = ['history', QueryHistoryFilter];
export type QueryHistoryData = FetchProductResponse['data'];

export const fetchHistory = async (ctx: QueryFunctionContext<QueryHistoryKey>) => {
  const { phoneNumber, page, limit } = ctx.queryKey[1];

  const product = await fetcherGsi
    .get<unknown, FetchProductResponse>(`${BASE_URL}/api/order-history`, {
      params: {
        phoneNumber,
        page: page ?? 1,
        limit: limit ?? 15,
      },
    })
    .then((res) => res.data);

  return product;
};

export const useQueryHistory = (filter: QueryHistoryFilter) =>
  useQuery<QueryHistoryData, unknown, QueryHistoryData, QueryHistoryKey>(
    ['history', filter],
    fetchHistory,
    {
      retry: 1,
      enabled: filter.phoneNumber !== undefined,
    },
  );
