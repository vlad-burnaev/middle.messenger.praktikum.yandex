const ERROR_MESSAGES = {
  login: {
    generalError: 'Неверный формат логина. Пример: login-777',
    emptyFieldError: 'Задайте пожалуйста логин',
  },
  password: {
    generalError: 'Неверный формат пароля. Пример: HelloWorld325',
    emptyFieldError: 'Задайте пожалуйста пароль',
  },
  email: {
    generalError: 'Неверный формат почты. Пример: hello@yandex.ru',
    emptyFieldError: 'Укажите пожалуйста почту',
  },
  firstName: {
    generalError: 'Неверный формат имени. Пример: Вася',
    emptyFieldError: 'Укажите пожалуйста имя',
  },
  secondName: {
    generalError: 'Неверный формат фамилии. Пример: Пупкин',
    emptyFieldError: 'Укажите пожалуйста фамилию',
  },
  phone: {
    generalError: 'Неверный формат телефона. Пример: 88005553535',
    emptyFieldError: 'Укажите пожалуйста телефон',
  },
  repeatPassword: {
    generalError: 'Пароли не совпадают',
    emptyFieldError: 'Поле обязательное для заполнения',
  },
};

export default ERROR_MESSAGES;
