import { AVATAR_API_BASE_URL } from './constants';

export const getAvatarUrl = (avatar?: Nullable<string>) => {
  if (!avatar) {
    return '';
  }
  return `${AVATAR_API_BASE_URL}${avatar}`;
};
