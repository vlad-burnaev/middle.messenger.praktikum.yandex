import { UserData } from './auth-api.model';
import { UserDataRaw } from './auth-api.raw-model';

export const mapUserDataToRaw = (data: UserData): UserDataRaw => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    login: data.login,
    password: data.password,
    email: data.email,
    phone: data.phone,
  };
};
