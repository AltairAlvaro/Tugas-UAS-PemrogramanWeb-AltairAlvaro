/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { BASE_URL } from '@/config/constants';

type SubmitOrderPayload = {
  data: Object;
  productId: number;
  productItemId: number;
  paymentChannelId: number;
  phoneNumber: string;
  username?: string;
  voucher?: string;
};

type PostSubmitOrderResponse = {
  data: {
    success: boolean;
    message: string;
    data: {
      reference: string;
      merchant_ref: string;
    };
  };
};

export type QuerySubmitOrderKey = ['submit-order', SubmitOrderPayload];
export type QuerySubmitOrderData = PostSubmitOrderResponse['data'];

export const postSubmitOrder = async (payload: SubmitOrderPayload) => {
  const submitOrder = await axios
    .post<unknown, PostSubmitOrderResponse>(`${BASE_URL}/api/submit-order`, payload)
    .then((res) => res.data);

  return submitOrder;
};

export const useMutationSubmitOrder = ({
  onSuccess,
  onError,
}: {
  onSuccess: (res: QuerySubmitOrderData) => void;
  onError: (error: Error) => void;
}) =>
  useMutation(['submit-order'], postSubmitOrder, {
    retry: 1,
    onSuccess,
    onError,
  });
