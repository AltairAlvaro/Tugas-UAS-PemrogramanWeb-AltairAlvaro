export type ProductInputField = {
  tag: string;
  attrs: {
    name: string;
    placeholder: string;
    type: string;
    length: string;
    datas: string;
  };
};

export type ProductItem = {
  id: number;
  name: string;
  price: number;
  priceDiscount?: number;
  iconUrl: string;
  smileCode?: string;
};

export type Product = {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  description: string;
  code: string;
  type: string;
  logoUrl: string;
  bannerUrl: string;
  helperUrl: string;
  isFeatured: boolean;
  siteTitle?: string;
  siteDescription?: string;
  siteMeta: [];
  siteBannerUrl: string;
  items: ProductItem[];
  category: {
    name: string;
  };
  userInput: {
    instructionText: string;
    fieldSectionTitle: string;
    itemSectionTitle: string;
    paymentSectionTitle: string;
    voucherSectionTitle: string;
    buySectionTitle: string;
    fields: ProductInputField[];
  };
};
