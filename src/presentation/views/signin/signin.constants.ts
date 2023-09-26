import { SigninInformationData } from "./signin.validator";

export const SigninInitialState: Required<SigninInformationData> = {
  rememberMe: false,
  password: "",
  email: "",
};
