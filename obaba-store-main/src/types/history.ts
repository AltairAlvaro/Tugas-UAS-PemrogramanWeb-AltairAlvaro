import { OrderDetail, OrderDetailTripay } from './order-detail';

export type History = {
  history: {
    items: OrderDetail[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
  tripayHistory: {
    success: boolean;
    message: string;
    data: OrderDetailTripay[];
  };
};
