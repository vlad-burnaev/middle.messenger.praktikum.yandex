export const profileChangePasswordPageData = {
  data: [
    {
      id: 'oldPassword', category: 'Старый пароль', type: 'password', placeholder: '•••••••••',
    },
    {
      id: 'newPassword', category: 'Новый пароль', type: 'password', placeholder: '•••••••••••',
    },
    {
      id: 'newPassword2', category: 'Повторите новый пароль', type: 'password', placeholder: '•••••••••••',
    },
  ],
  submitButton: { href: '#', label: 'Сохранить' },
  goBack: {
    href: '#',
  },
};
