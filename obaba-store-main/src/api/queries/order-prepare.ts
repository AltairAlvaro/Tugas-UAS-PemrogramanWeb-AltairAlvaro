import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { BASE_URL } from '@/config/constants';

type QueryOrderPreparationFilter = {
  userData: {};
  productCode: string;
};

type FetchOrderPreparationResponse = {
  data: {
    message: string;
    data: string;
  };
};

export type QueryOrderPreparationKey = ['order-prepare', QueryOrderPreparationFilter];
export type QueryOrderPreparationData = FetchOrderPreparationResponse['data'];

export const fetchOrderPreparation = async (payload: QueryOrderPreparationFilter) => {
  const orderPrepare = await axios
    .post<unknown, FetchOrderPreparationResponse>(`${BASE_URL}/api/order-prepare`, payload)
    .then((res) => res.data);

  return orderPrepare;
};

export const useMutationOrderPreparation = () =>
  useMutation(['order-prepare'], fetchOrderPreparation, {
    retry: 1,
  });
