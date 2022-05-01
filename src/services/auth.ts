import AuthAPI from '../api/auth-api';
import { UserData } from '../api/auth-api.model';
import Router from '../core/Router';
import { Routes } from '../core/routes';

export class AuthService {
  private api = new AuthAPI();

  private router = new Router();

  public async register(data: UserData) {
    const res = await this.api.signUp(data);

    if (res.status !== 200) {
      throw new Error(JSON.parse(res.responseText).reason);
    }

    console.log('Запиши в стор ', {
      user: {
        id: JSON.parse(res.responseText).id,
        firstName: data.firstName,
        secondName: data.secondName,
        login: data.login,
        email: data.email,
        phone: data.phone,
      },
    });
    this.router.go(Routes.Index);
  }
}
