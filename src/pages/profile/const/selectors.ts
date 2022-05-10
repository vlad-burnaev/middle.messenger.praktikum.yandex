import { ProfileForms } from '../types';

const SELECTORS = {
  AVATAR: {
    LABEL: 'avatar__label',
    LABEL_HIDDEN: 'avatar__label_hidden',
    FILE_UPLOAD: 'avatar__file-upload',
    IMAGE: 'avatar__image',
    IMAGE_PLACEHOLDER: 'avatar__image-placeholder',
  },
  PROFILE_FORM: {
    DEFAULT: 'profile-form',
    DISABLED: 'profile-form_disabled',
    SUBMIT_BTN_HIDDEN: 'profile-form__submit-button-wrap_hidden',
    [ProfileForms.USER_INFO_FORM]: {
      DEFAULT: 'profile__user-info-form',
      INPUT: '#profile__user-info-form .profile-form__input',
      SUBMIT_BTN: '#profile__user-info-form .profile-form__submit-button-wrap',
    },
    [ProfileForms.PASSWORD_CHANGE_FORM]: {
      DEFAULT: 'profile__password-change-form',
      INPUT: '#profile__password-change-form .profile-form__input',
      SUBMIT_BTN: '#profile__password-change-form .profile-form__submit-button-wrap',
    },
  },
  ACTIONS_BUTTONS: {
    DEFAULT: 'profile__actions-buttons',
    HIDDEN: 'profile__actions-buttons_hidden',
    CHANGE_USER_INFO: 'change-user-info-button',
    CHANGE_PASSWORD: 'change-password-button',
  },
};

export default SELECTORS;
