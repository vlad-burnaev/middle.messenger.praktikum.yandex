export const loginData = {
  title: 'Вход',
  formFields: [
    {
      id: 'login', label: 'Логин', type: 'email', isRequired: true,
    },
    {
      id: 'password', label: 'Пароль', type: 'password', isRequired: true,
    },
  ],
  submitButton: {
    label: 'Авторизироваться',
  },
  secondaryButton: {
    label: 'Нет аккаунта?',
  },
};
