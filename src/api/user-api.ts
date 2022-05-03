import HTTPTransport from '../core/HTTPTransport';
import { ProfileEditData } from './user-api.model';
import { mapProfileEditDataToRaw } from './user-api.mappers';

const BASE_API_URL = '/user';

export default class UserApi {
  private api = HTTPTransport.getInstance();

  public editProfile(data: ProfileEditData) {
    const options = {
      data: mapProfileEditDataToRaw(data),
    };

    return this.api.put(`${BASE_API_URL}/profile`, options);
  }
}
