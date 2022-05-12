import { APIError } from './errors';

export type SignUpRequest = {
  firstName: string;
  secondName: string;
  login: string;
  password: string;
  email: string;
  phone: string;
}

export type SignUpRequestRaw = {
  first_name: string;
  second_name: string;
  login: string;
  password: string;
  email: string;
  phone: string;
}

export const mapSignUpRequestToRaw = (data: SignUpRequest): SignUpRequestRaw => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    login: data.login,
    password: data.password,
    email: data.email,
    phone: data.phone,
  };
};

export type SignUpResponse = {
  id: number
} | APIError;

export type SignInRequest = {
  login: string,
  password: string
}

export type SignInResponse = {} | APIError;
