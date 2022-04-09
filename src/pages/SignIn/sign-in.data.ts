export const signInData = {
  title: 'Вход',
  formFields: {
    login: {
      name: 'login', label: 'Логин', type: 'email', isRequired: true,
    },
    password: {
      name: 'password', label: 'Пароль', type: 'password', isRequired: true,
    },
  },
  submitButton: {
    label: 'Авторизироваться',
  },
  secondaryButton: {
    label: 'Нет аккаунта?',
    href: '#',
  },
};
