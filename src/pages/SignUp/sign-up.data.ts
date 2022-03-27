export const signUpData = {
  title: 'Регистрация',
  formfields: {
    email: {
      id: 'email', label: 'Почта', type: 'email', isRequired: true,
    },
    login: {
      id: 'login', label: 'Логин', type: 'text', isRequired: true,
    },
    first_name: {
      id: 'first_name', label: 'Имя', type: 'text', isRequired: true,
    },
    second_name: {
      id: 'second_name', label: 'Фамилия', type: 'text', isRequired: true,
    },
    phone: {
      id: 'phone', label: 'Телефон', type: 'tel', isRequired: true,
    },
    password: {
      id: 'password', label: 'Пароль', type: 'password', isRequired: true,
    },
    password_2: {
      id: 'password_2', label: 'Пароль (еще раз)', type: 'password', isRequired: true,
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
