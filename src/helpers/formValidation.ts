function isNameValid(value: string): boolean {
  return /^[A-ZА-ЯЁ]{1}[a-zA-ZА-Яа-яёЁ-]+$/.test(value);
}

function isLoginValid(value: string): boolean {
  if (value.length < 3 || value.length > 20) return false;

  return /^\d*[a-zA-Z_-][\w-]*$/.test(value);
}

function isEmail(value: string): boolean {
  return /^[\w-$!%*#?&]+@[a-zA-z]+\.[a-zA-z]+$/.test(value);
}

function isPasswordValid(value: string): boolean {
  if (value.length < 8 || value.length > 40) return false;

  return /^(?=.*[A-Z])(?=.*\d).*$/.test(value);
}

function isOldPasswordValid(value: string): boolean {
  return !!value;
}

function isRepeatPasswordValid(value: string, passwordValue: string): boolean {
  if (!passwordValue) return !!value;
  return value === passwordValue;
}

function isPhoneValid(value: string): boolean {
  if (value.length < 10 || value.length > 15) return false;

  return /^[+]?\d+$/.test(value);
}

function isMessageValid(value: string): boolean {
  return !!value;
}

export default function isValid(fieldName: string, value: string, dependentFieldValue = '') {
  switch (fieldName) {
    case 'email':
      return isEmail(value);
    case 'oldPassword':
      return isOldPasswordValid(value);
    case 'password':
    case 'newPassword':
      return isPasswordValid(value);
    case 'firstName':
    case 'secondName':
      return isNameValid(value);
    case 'login':
      return isLoginValid(value);
    case 'repeatPassword':
      return isRepeatPasswordValid(value, dependentFieldValue);
    case 'phone':
      return isPhoneValid(value);
    case 'message':
      return isMessageValid(value);
    default:
      return true;
  }
}
