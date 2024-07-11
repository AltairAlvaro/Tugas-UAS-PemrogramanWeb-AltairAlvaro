export type Payment = {
  id: number;
  name: string;
  accountName?: string;
  accountNumber?: string | number;
  group: string;
  code: string;
  feeFlat: number;
  minAmount?: number;
  maxAmount?: number;
  feePercent: string;
  iconUrl: string;
  description: string;
  paymentMethods?: [];
  instruction?: string;
  isActive: boolean;
  isOnline: boolean;
};

export type PaymentGroup = {
  group: string;
  datas: Payment[];
};
