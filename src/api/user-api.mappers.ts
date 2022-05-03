import { ProfileEditData } from './user-api.model';
import { ProfileEditDataRaw } from './user-api.raw-model';

export const mapProfileEditDataToRaw = (data: ProfileEditData): ProfileEditDataRaw => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    display_name: data.displayName,
    login: data.login,
    email: data.email,
    phone: data.phone,
  };
};
