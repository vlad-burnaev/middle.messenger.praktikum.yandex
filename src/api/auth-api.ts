import HTTPTransport from '../core/HTTPTransport';
import {
  mapSignUpRequestToRaw, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse,
} from './types/auth';

export default class AuthAPI {
  private api = new HTTPTransport();

  public signIn(data: SignInRequest) {
    const options = {
      data,
    };

    return this.api.post('/auth/signin', options)
      .then(({ response }) => response as SignInResponse);
  }

  public signUp(data: SignUpRequest) {
    const options = {
      data: mapSignUpRequestToRaw(data),
    };

    return this.api.post('/auth/signup', options)
      .then(({ response }) => response as SignUpResponse);
  }

  public logout() {
    return this.api.post('/auth/logout')
      .then(({ response }) => response);
  }
}
