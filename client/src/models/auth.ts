import { IUser } from "./user";

export interface SignupDto {
  name: string;
  bio?: string;
  email: string;
  password: string;
}

export interface SigninDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: IUser;
  token: string;
}
