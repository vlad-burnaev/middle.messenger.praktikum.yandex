import AuthAPI from '../api/auth-api';
import { Dispatch } from '../core/Store';
import { mapRawToUser } from '../api/auth-api.mappers';
import Router from '../core/Router';
import { Routes } from '../core/routes';

const api = new AuthAPI();

export class InitAppService {
  public async init(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await api.getUser();

    dispatch({ isLoading: false });

    if (response.status === 401) {
      dispatch({ isAuth: false });
      new Router().go(Routes.SignIn);
    }

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({ isAuth: true, user: mapRawToUser(JSON.parse(response.responseText)) });
  }
}
