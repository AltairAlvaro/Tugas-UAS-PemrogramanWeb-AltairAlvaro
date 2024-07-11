import { Payment } from './payment';
import { Product, ProductItem } from './product';

export type OrderDetail = {
  invoiceId: string;
  reference: string;
  type: string;
  actionPayment?: {
    qrString?: string;
    qrUrl?: string;
    virtualAccount?: string;
    paymentDirect?: string;
  };
  phoneNumber: string;
  amount: number;
  uniqueCode: number;
  totalDiscount: number;
  totalFee: number;
  totalAmount: number;
  quantity: number;
  status: string;
  expiredAt: string;
  createdDate: string;
  updatedDate: string;
  finishedDate?: string;
  productDetail: {
    data: {
      userId?: string;
      zoneId?: string;
    };
    ign?: string;
    voucher?: string;
    productName: string;
    productItemName: string;
    voucherCode?: string;
    product: Product;
    productItem: ProductItem;
  };
  paymentChannel: Payment;
};

export type OrderDetailTripay = {
  reference: string;
  merchant_ref: string;
  payment_selection_type: string;
  payment_method: string;
  payment_name: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  callback_url: string;
  return_url?: string;
  amount: number;
  fee_merchant: number;
  fee_customer: number;
  total_fee: number;
  amount_received: number;
  pay_code: string;
  pay_url: string;
  checkout_url: string;
  order_items: {
    sku: string;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];
  status: string;
  note: string;
  created_at: number;
  expired_at: number;
  paid_at: number;
};
