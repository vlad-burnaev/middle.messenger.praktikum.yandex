export const profileChangePasswordPageData = {
  data: {
    old_password: {
      id: 'old_password', category: 'Старый пароль', type: 'password', placeholder: '•••••••••',
    },
    new_password: {
      id: 'new_password', category: 'Новый пароль', type: 'password', placeholder: '•••••••••••',
    },
    new_password_2: {
      id: 'new_password_2', category: 'Повторите новый пароль', type: 'password', placeholder: '•••••••••••',
    },
  },
  submitButton: { href: '#', label: 'Сохранить' },
  goBack: {
    href: '#',
  },
};
