import { FormProps } from '../../components/Form/form';

export const signInData: FormProps = {
  title: 'Вход',
  formFields: [
    {
      name: 'login', label: 'Логин', type: 'email', errorMessage: 'Неверный логин',
    },
    {
      name: 'password', label: 'Пароль', type: 'password', errorMessage: 'Неверный пароль',
    },
  ],
  submitButton: {
    label: 'Авторизироваться',
    onClick: () => console.log('submit'),
  },
  secondaryButton: {
    label: 'Нет аккаунта?',
    onClick: () => console.log('secondaryButton clicked'),
  },
};
