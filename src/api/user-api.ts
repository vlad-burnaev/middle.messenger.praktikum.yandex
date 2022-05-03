import HTTPTransport from '../core/HTTPTransport';
import { ProfileChangePasswordData, ProfileEditData } from './user-api.model';
import { mapProfileEditDataToRaw } from './user-api.mappers';

const USER_API_PREFIX = '/user';
const getUserApiURL = (path: string) => {
  return `${USER_API_PREFIX}/${path}`;
};

export default class UserApi {
  private api = HTTPTransport.getInstance();

  public editProfile(data: ProfileEditData) {
    const options = {
      data: mapProfileEditDataToRaw(data),
    };

    return this.api.put(getUserApiURL('profile'), options);
  }

  public changePassword(data: ProfileChangePasswordData) {
    const options = {
      data,
    };

    return this.api.put(getUserApiURL('password'), options);
  }
}
