import { SignUpFormData } from './auth-api.model';
import { SignUpFormDataRaw, UserRaw } from './auth-api.raw-model';

export const mapSignUpFormDataToRaw = (data: SignUpFormData): SignUpFormDataRaw => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    login: data.login,
    password: data.password,
    email: data.email,
    phone: data.phone,
  };
};

export const mapRawToUser = (response: UserRaw): User => {
  return {
    id: response.id,
    login: response.login,
    firstName: response.first_name,
    secondName: response.second_name,
    displayName: response.display_name,
    avatar: response.avatar,
    phone: response.phone,
    email: response.email,
  };
};
