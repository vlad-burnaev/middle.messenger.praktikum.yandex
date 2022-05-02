import HTTPTransport from '../core/HTTPTransport';
import { BodyRequest } from '../utils/types';
import { SignUpFormData } from './auth-api.model';
import { mapSignUpFormDataToRaw } from './auth-api.mappers';

export default class AuthAPI {
  private api = HTTPTransport.getInstance();

  public signIn(data: BodyRequest) {
    const options = {
      data,
    };

    return this.api.post('/auth/signin', options);
  }

  public logout() {
    return this.api.post('/auth/logout');
  }

  public signUp(data: SignUpFormData) {
    const options = {
      data: mapSignUpFormDataToRaw(data),
    };

    return this.api.post('/auth/signup', options);
  }

  public getUser() {
    return this.api.get('/auth/user');
  }
}
