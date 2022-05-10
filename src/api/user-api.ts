import HTTPTransport from '../core/HTTPTransport';
import { ChangeAvatarData, ProfileChangePasswordData, ProfileEditData } from './user-api.model';
import { mapProfileEditDataToRaw } from './user-api.mappers';

const BASE_URL = '/user';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default class UserAPI {
  private api = new HTTPTransport();

  public editProfile(data: ProfileEditData) {
    const options = {
      data: mapProfileEditDataToRaw(data),
    };

    return this.api.put(getURL('profile'), options);
  }

  public changePassword(data: ProfileChangePasswordData) {
    const options = {
      data,
    };

    return this.api.put(getURL('password'), options);
  }

  public changeAvatar(data: ChangeAvatarData) {
    const options = {
      data,
      isFile: true,
    };

    return this.api.put(getURL('profile/avatar'), options);
  }

  public getUser() {
    return this.api.get('/auth/user');
  }
}
