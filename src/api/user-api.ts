import HTTPTransport from '../core/HTTPTransport';
import { ProfileChangePasswordData, ProfileEditData } from './user-api.model';
import { mapProfileEditDataToRaw } from './user-api.mappers';

const BASE_URL = '/user';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default class UserApi {
  private api = HTTPTransport.getInstance();

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
}
