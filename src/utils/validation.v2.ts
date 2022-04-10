export type ValidationScheme =
  | 'login'
  | 'password'
  | 'email'
  | 'name'
  | 'phone'
  | 'message'

export const validate = (type: ValidationScheme, input: string) => {
  if (!type || !input) {
    throw Error('No params for validation');
  }

  const validationType = {
    login: /^(?=.*[a-zA-Z-_])[a-zA-z0-9-_]{3,20}$/,
    password: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    name: /^[A-ZА-Я][a-zа-я-]*$/,
    phone: /^(\+)?\d{5,15}$/,
    message: /^$|\s+/,
  };

  return new RegExp(validationType[type]).test(input);
};
