export const profileEditDataPageData = {
  data: [
    {
      id: 'email', category: 'Почта', type: 'email', placeholder: 'pochta@yandex.ru',
    },
    {
      id: 'login', category: 'Логин', type: 'text', placeholder: 'ivanivanov',
    },
    {
      id: 'first_name', category: 'Имя', type: 'text', placeholder: 'Иван',
    },
    {
      id: 'second_name', category: 'Фамилия', type: 'text', placeholder: 'Иванов',
    },
    {
      id: 'display_name', category: 'Имя в чате', type: 'text', placeholder: 'Иван',
    },
    {
      id: 'phone', category: 'Телефон', type: 'tel', placeholder: '+7 (909) 967 30 30',
    },
  ],
  submitButton: { href: '/src/pages/ProfilePages/Profile/Profile.html ', label: 'Сохранить' },
  goBack: {
    href: '/src/pages/ProfilePages/Profile/Profile.html',
  },
};
