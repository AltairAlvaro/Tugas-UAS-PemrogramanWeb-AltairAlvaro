import { useQuery } from '@tanstack/react-query';

import fetcherGsi from '@/api/fetcherGsi';
import { PaymentChannels } from '@/types/payment-channels';

type QueryPaymentChannelsFilter = {
  q?: string;
};

type FetchPaymentChannelsResponse = {
  data: PaymentChannels;
};

export type QueryPaymentChannelsKey = ['payment-channels', QueryPaymentChannelsFilter];
export type QueryPaymentChannelsData = FetchPaymentChannelsResponse['data'];

export const fetchPaymentChannels = async () => {
  const paymentChannels = await fetcherGsi
    .get<unknown, FetchPaymentChannelsResponse>(`/v1/payment/channels`)
    .then((res) => res.data);

  return paymentChannels;
};

export const useQueryPaymentChannels = (filter: QueryPaymentChannelsFilter) =>
  useQuery<QueryPaymentChannelsData, unknown, QueryPaymentChannelsData, QueryPaymentChannelsKey>(
    ['payment-channels', filter],
    fetchPaymentChannels,
    {
      retry: 1,
    },
  );
