import { Routes } from '../../../core/routes';

export const profileEditDataPageData = {
  data: {
    email: {
      id: 'email', category: 'Почта', type: 'email', placeholder: 'pochta@yandex.ru',
    },
    login: {
      id: 'login', category: 'Логин', type: 'text', placeholder: 'ivanivanov',
    },
    first_name: {
      id: 'first_name', category: 'Имя', type: 'text', placeholder: 'Иван',
    },
    second_name: {
      id: 'second_name', category: 'Фамилия', type: 'text', placeholder: 'Иванов',
    },
    display_name: {
      id: 'display_name', category: 'Имя в чате', type: 'text', placeholder: 'Иван',
    },
    phone: {
      id: 'phone', category: 'Телефон', type: 'tel', placeholder: '+7 (909) 967 30 30',
    },
  },
  submitButton: { href: Routes.Profile, label: 'Сохранить' },
  goBack: {
    href: Routes.Profile,
  },
};
