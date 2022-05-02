import { Routes } from '../../../core/routes';

export const profileMainData = {
  actions: [
    { href: Routes.EditProfile, label: 'Изменить данные' },
    { href: Routes.ChangePassword, label: 'Изменить пароль' },
  ],
  goBack: {
    href: Routes.Index,
  },
};
