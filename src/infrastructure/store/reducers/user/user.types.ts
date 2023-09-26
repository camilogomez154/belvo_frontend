export type UserInformationType = {
  name: string;
  lastname: string;
  email: string;
  image?: string;
};

export type UserInitialStateType = {
  profile?: UserInformationType;
  list?: UserInitialStateType[];
  loading: boolean;
  error?: string;
};
