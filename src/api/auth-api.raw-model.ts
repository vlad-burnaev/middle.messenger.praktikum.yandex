/* eslint-disable camelcase */
export type SignUpFormDataRaw = {
  first_name: string;
  second_name: string;
  login: string;
  password: string;
  email: string;
  phone: string;
}

export type UserRaw = {
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
  avatar: string
}
