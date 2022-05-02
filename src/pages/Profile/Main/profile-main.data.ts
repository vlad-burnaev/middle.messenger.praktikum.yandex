import { Routes } from '../../../core/routes';

export const profileMainData = {
  data: [
    { category: 'Почта', data: 'pochta@yandex.ru' },
    { category: 'Логин', data: 'ivanivanov' },
    { category: 'Имя', data: 'Иван' },
    { category: 'Фамилия', data: 'Иванов' },
    { category: 'Имя в чате', data: 'Иван' },
    { category: 'Телефон', data: '+7 (909) 967 30 30' },
  ],
  actions: [
    { href: Routes.EditProfile, label: 'Изменить данные' },
    { href: Routes.ChangePassword, label: 'Изменить пароль' },
  ],
  goBack: {
    href: Routes.Index,
  },
};
