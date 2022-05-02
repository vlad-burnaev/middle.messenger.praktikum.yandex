import AuthAPI from '../api/auth-api';
import { SignUpFormData } from '../api/auth-api.model';
import Router from '../core/Router';
import { Routes } from '../core/routes';

export class AuthService {
  private api = new AuthAPI();

  private router = new Router();

  public async register(data: SignUpFormData) {
    const res = await this.api.signUp(data);

    if (res.status !== 200) {
      throw new Error(JSON.parse(res.responseText).reason);
    }

    // this.store.setState({
    //   user: {
    //     id: JSON.parse(res.responseText).id,
    //     firstName: data.firstName,
    //     secondName: data.secondName,
    //     login: data.login,
    //     email: data.email,
    //     phone: data.phone,
    //   },
    // });

    this.router.go(Routes.Index);
  }

  public async getUser() {
    // if (this.store.getState().user !== null) {
    //   return this.store.getState().user;
    // }

    const res = await this.api.getUser();

    if (res.status !== 200) {
      throw new Error(JSON.parse(res.responseText).reason);
    }

    // this.store.setState({ user: mapRawToUser(JSON.parse(res.responseText)) });
    // return this.store.getState().user;
  }
}
