export const signUpData = {
  title: 'Регистрация',
  formfields: {
    email: {
      name: 'email', label: 'Почта', type: 'email', isRequired: true,
    },
    login: {
      name: 'login', label: 'Логин', type: 'text', isRequired: true,
    },
    first_name: {
      name: 'first_name', label: 'Имя', type: 'text', isRequired: true,
    },
    second_name: {
      name: 'second_name', label: 'Фамилия', type: 'text', isRequired: true,
    },
    phone: {
      name: 'phone', label: 'Телефон', type: 'tel', isRequired: true,
    },
    password: {
      name: 'password', label: 'Пароль', type: 'password', isRequired: true,
    },
    password_2: {
      name: 'password_2', label: 'Пароль (еще раз)', type: 'password', isRequired: true,
    },
  },
  submitButton: {
    label: 'Зарегистрироваться',
  },
  secondaryButton: {
    label: 'Войти',
    href: '#',
  },
};
