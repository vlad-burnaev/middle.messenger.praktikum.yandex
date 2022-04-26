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

    console.log('Запиши в стор id', JSON.parse(res.responseText).id);
    this.router.go(Routes.Index);
  }
}
