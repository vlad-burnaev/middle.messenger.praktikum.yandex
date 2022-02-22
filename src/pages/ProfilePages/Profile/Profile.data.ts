export const profilePageData = {
  data: [
    { category: 'Почта', data: 'pochta@yandex.ru' },
    { category: 'Логин', data: 'ivanivanov' },
    { category: 'Имя', data: 'Иван' },
    { category: 'Фамилия', data: 'Иванов' },
    { category: 'Имя в чате', data: 'Иван' },
    { category: 'Телефон', data: '+7 (909) 967 30 30' },
  ],
  actions: [
    { href: '/src/pages/ProfilePages/ProfileEditData/ProfileEditData.html', label: 'Изменить данные' },
    { href: '/src/pages/ProfilePages/ProfileChangePassword/ProfileChangePassword.html', label: 'Изменить пароль' },
    { href: '/src/pages/SignIn/SignIn.html', label: 'Выйти' },
  ],
  goBack: {
    href: '/src/pages/Main/Main.html',
  },
};
