export type CategoryInformationType = {
  name: string;
  description: string;
  isActive: string;
};

export type CategoryInitialStateType = {
  list: CategoryInformationType[];
  loading: boolean;
  error?: string;
};
