export const signInData = {
  form: {
    title: 'Вход',
    formfields: [
      {
        id: 'login', label: 'Логин', type: 'email', isRequired: true,
      },
      {
        id: 'password', label: 'Пароль', type: 'password', isRequired: true,
      },
    ],
    submitButton: {
      label: 'Авторизироваться',
      href: '../Main/Main.html',
    },
    secondaryButton: {
      label: 'Нет аккаунта?',
      href: '../SignUp/SignUp.html',
    },
  },
};
