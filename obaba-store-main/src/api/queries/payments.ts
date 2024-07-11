import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { PaymentGroup } from '@/types/payment';

type QueryPaymentGroupsFilter = {
  except?: string;
};

type FetchPaymentGroupsResponse = {
  data: PaymentGroup[];
};

export type QueryPaymentGroupsKey = ['payment-groups', QueryPaymentGroupsFilter];
export type QueryPaymentGroupsData = FetchPaymentGroupsResponse['data'];

export const fetchPaymentGroups = async (ctx: QueryFunctionContext<QueryPaymentGroupsKey>) => {
  const { except } = ctx.queryKey[1];
  const payment = await fetcherGsi
    .get<unknown, FetchPaymentGroupsResponse>(`/v1/payment?except=${except}`)
    .then((res) => res.data);

  return payment;
};

export const useQueryPaymentGroups = (filter: QueryPaymentGroupsFilter) =>
  useQuery<QueryPaymentGroupsData, unknown, QueryPaymentGroupsData, QueryPaymentGroupsKey>(
    ['payment-groups', filter],
    fetchPaymentGroups,
    {
      retry: 1,
    },
  );
