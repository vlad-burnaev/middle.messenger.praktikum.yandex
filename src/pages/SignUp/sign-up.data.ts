import { FormData } from '../SignIn/sign-in.data';
import { Routes } from '../../core/routes';

export const signUpData: FormData = {
  title: 'Регистрация',
  formFields: {
    email: {
      id: 'email',
      label: 'Почта',
      type: 'email',
      isRequired: true,
      validationScheme: 'email',
      errorMessage: 'Неверный email',
    },
    login: {
      id: 'login',
      label: 'Логин',
      type: 'text',
      isRequired: true,
      validationScheme: 'login',
      errorMessage: 'Неверный логин',
    },
    firstName: {
      id: 'firstName',
      label: 'Имя',
      type: 'text',
      isRequired: true,
      validationScheme: 'name',
      errorMessage: 'Неверный формат имени',
    },
    secondName: {
      id: 'secondName',
      label: 'Фамилия',
      type: 'text',
      isRequired: true,
      validationScheme: 'name',
      errorMessage: 'Неверный формат фамилии',
    },
    phone: {
      id: 'phone',
      label: 'Телефон',
      type: 'tel',
      isRequired: true,
      validationScheme: 'phone',
      errorMessage: 'Неверный формат номера телефона',
    },
    password: {
      id: 'password',
      label: 'Пароль',
      type: 'password',
      isRequired: true,
      validationScheme: 'password',
      errorMessage: 'Неверный формат пароля',
    },
    passwordRepeat: {
      id: 'passwordRepeat',
      label: 'Пароль (еще раз)',
      type: 'password',
      isRequired: true,
      validationScheme: 'password',
      errorMessage: 'Неверный формат пароля',
    },
  },
  submitButton: {
    label: 'Зарегистрироваться',
  },
  secondaryButton: {
    label: 'Войти',
    path: Routes.SignIn,
  },
};
