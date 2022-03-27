export const signInData = {
  title: 'Вход',
  formFields: {
    login: {
      id: 'login', label: 'Логин', type: 'email', isRequired: true,
    },
    password: {
      id: 'password', label: 'Пароль', type: 'password', isRequired: true,
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
