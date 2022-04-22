import { FormFieldProps } from '../../components/FormField/form-field';
import { Routes } from '../../core/routes';

export type FormData = {
  title: string,
  formFields: Record<string, FormFieldProps>,
  submitButton: {
    label: string
  },
  secondaryButton: {
    label: string,
    path: string,
  }
}

export const signInData: FormData = {
  title: 'Вход',
  formFields: {
    login: {
      id: 'login',
      label: 'Логин',
      type: 'text',
      isRequired: true,
      validationScheme: 'login',
      errorMessage: 'Неверный логин',
    },
    password: {
      id: 'password',
      label: 'Пароль',
      type: 'password',
      isRequired: true,
      validationScheme: 'password',
      errorMessage: 'Неверный пароль',
    },
  },
  submitButton: {
    label: 'Авторизироваться',
  },
  secondaryButton: {
    label: 'Нет аккаунта?',
    path: Routes.SignUp,
  },
};
