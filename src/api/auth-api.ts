import HTTPTransport from '../core/HTTPTransport';
import { SignInFormData, SignUpFormData } from './auth-api.model';
import { mapSignUpFormDataToRaw } from './auth-api.mappers';

export default class AuthAPI {
  private api = new HTTPTransport();

  public signIn(data: SignInFormData) {
    const options = {
      data,
    };

    return this.api.post('/auth/signin', options);
  }

  public signUp(data: SignUpFormData) {
    const options = {
      data: mapSignUpFormDataToRaw(data),
    };

    return this.api.post('/auth/signup', options);
  }

  public logout() {
    return this.api.post('/auth/logout')
      .then(({ response }) => response);
  }
}
