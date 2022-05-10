import HTTPTransport from '../core/HTTPTransport';
import {
  ChangeAvatarRequest,
  mapProfileEditRequestToRaw,
  ProfileChangePasswordRequest, ProfileChangePasswordResponse,
  ProfileEditRequest,
  ProfileEditResponse, UserDTO,
} from './types/user';

const BASE_URL = '/user';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default class UserAPI {
  private api = new HTTPTransport();

  public editProfile(data: ProfileEditRequest) {
    const options = {
      data: mapProfileEditRequestToRaw(data),
    };

    return this.api.put(getURL('profile'), options)
      .then(({ response }) => response as ProfileEditResponse);
  }

  public changePassword(data: ProfileChangePasswordRequest) {
    const options = {
      data,
    };

    return this.api.put(getURL('password'), options)
      .then(({ response }) => response as ProfileChangePasswordResponse);
  }

  public changeAvatar(data: ChangeAvatarRequest) {
    const options = {
      data,
      isFile: true,
    };

    return this.api.put(getURL('profile/avatar'), options)
      .then(({ response }) => response as UserDTO);
  }

  public getUser() {
    return this.api.get('/auth/user')
      .then(({ response }) => response as UserDTO);
  }
}
