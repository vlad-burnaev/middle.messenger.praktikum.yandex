const EMAIL_REGEX = '[\\w-_]+@\\w+\\.\\w+';
const LOGIN_REGEX = '[a-zA-z-_]+\\w';
const PHONE_REGEX = '/\\+?\\d+/gm';
const NAME_REGEX = '[A-ZА-Я][a-zA-Zа-яА-Я-]*';

const checkString = (str: string, regex: string) => str.match(regex)?.[0].length === str.length;

export const isValidEmail = (input: string) => checkString(input, EMAIL_REGEX);

export const isValidLogin = (input: string) => {
  if (input.length < 3 || input.length > 20) {
    return false;
  }
  return checkString(input, LOGIN_REGEX);
};

export const isValidPassword = (input: string) => {
  if (input.length < 8 || input.length > 40) {
    return false;
  }
  if (input.search(/[0-9]/) < 0) {
    return false;
  }
  if (input.search(/[A-ZА-Я]/) < 0) {
    return false;
  }
  return true;
};

export const isValidPhone = (input: string) => {
  if (input.length < 10 || input.length > 15) {
    return false;
  }
  return checkString(input, PHONE_REGEX);
};

export const isValidMessage = (input: string) => input.length;

export const isValidName = (input: string) => checkString(input, NAME_REGEX);
