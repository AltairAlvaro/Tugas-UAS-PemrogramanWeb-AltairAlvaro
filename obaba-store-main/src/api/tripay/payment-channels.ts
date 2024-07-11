import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import fetcherTripay from '../fetcherTripay';

type FilterTripayPaymentChannel = {
  code?: string;
};

export type FetchTripayPaymentChannel = {
  data: {
    message: string;
    data: {
      group: string;
      code: string;
      name: string;
      type: string;
      fee_merchant: {
        flat: number;
        percent: number;
      };
      fee_customer: {
        flat: number;
        percent: number;
      };
      total_fee: {
        flat: number;
        percent: string;
      };
      icon_url: string;
      active: boolean;
    }[];
  };
};

export type QueryTripayPaymentChannelKey = ['tripay-payment-channels', FilterTripayPaymentChannel];
export type QueryTripayPaymentChannelData = FetchTripayPaymentChannel['data']['data'];

export const fetchTripayPaymentChannel = async (
  ctx: QueryFunctionContext<QueryTripayPaymentChannelKey>,
) => {
  const { code } = ctx.queryKey[1];

  const paymentChannels = await fetcherTripay
    .get<unknown, FetchTripayPaymentChannel>('/merchant/payment-channel', {
      params: {
        code,
      },
    })
    .then((res) => res.data);

  return paymentChannels.data;
};

export const useQueryTripayPaymentChannel = (filter: FilterTripayPaymentChannel) =>
  useQuery<
    QueryTripayPaymentChannelData,
    unknown,
    QueryTripayPaymentChannelData,
    QueryTripayPaymentChannelKey
  >(['tripay-payment-channels', filter], fetchTripayPaymentChannel, {
    retry: 1,
  });
