export type ProductInformationType = {
  name: string;
  description: string;
  isActive: string;
  image?: string;
};

export type ProductInitialStateType = {
  list: ProductInformationType[];
  loading: boolean;
  error?: string;
};
