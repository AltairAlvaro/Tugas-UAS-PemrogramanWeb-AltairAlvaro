import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { BASE_URL } from '@/config/constants';
import { OrderDetail } from '@/types/order-detail';

type QueryOrderDetailFilter = {
  trxId?: string;
};

type FetchOrderDetailResponse = {
  data: OrderDetail;
};

export type QueryOrderDetailKey = ['order-detail', QueryOrderDetailFilter];
export type QueryOrderDetailData = FetchOrderDetailResponse['data'];

export const fetchOrderDetail = async (ctx: QueryFunctionContext<QueryOrderDetailKey>) => {
  const { trxId } = ctx.queryKey[1];

  const product = await axios
    .get<unknown, FetchOrderDetailResponse>(`${BASE_URL}/v1/order/${trxId}`)
    .then((res) => res.data);

  return product;
};

export const useQueryOrderDetail = (filter: QueryOrderDetailFilter) =>
  useQuery<QueryOrderDetailData, unknown, QueryOrderDetailData, QueryOrderDetailKey>(
    ['order-detail', filter],
    fetchOrderDetail,
    {
      retry: 1,
      enabled: filter.trxId !== undefined,
    },
  );
