import { APIError } from './errors';
import { getAvatarUrl } from '../../utils/getAvatarUrl';

export type ProfileEditRequest = {
  firstName: string,
  secondName: string,
  displayName: string,
  login: string,
  email: string,
  phone: string
}

export type ProfileEditRequestRaw = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export const mapProfileEditRequestToRaw = (data: ProfileEditRequest): ProfileEditRequestRaw => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    display_name: data.displayName,
    login: data.login,
    email: data.email,
    phone: data.phone,
  };
};

export type ProfileEditResponse = UserDTO | APIError;

export type ProfileChangePasswordRequest = {
  oldPassword: string,
  newPassword: string
}

export type ProfileChangePasswordResponse = {} | APIError;

export type ChangeAvatarRequest = {
  avatar: FormData
}

export type UserDTO = {
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
  avatar: string
}

export const mapUser = (response: UserDTO): User => {
  return {
    id: response.id,
    login: response.login,
    firstName: response.first_name,
    secondName: response.second_name,
    displayName: response.display_name,
    avatar: response.avatar ? getAvatarUrl(response.avatar) : '',
    phone: response.phone,
    email: response.email,
  };
};
