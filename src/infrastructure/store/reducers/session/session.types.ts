export type SessionInformationType = {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
};

export type SessionInitialStateType = {
  information?: SessionInformationType;
  loading: boolean;
  error?: string;
};
