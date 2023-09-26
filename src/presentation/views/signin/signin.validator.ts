import { IsString, IsEmail, IsNotEmpty, IsBoolean } from "class-validator";

export class SigninInformationData {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsBoolean()
  rememberMe!: boolean;
}
