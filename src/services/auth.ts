import AuthAPI from '../api/auth-api';
import { SignUpFormData } from '../api/auth-api.model';
import { Dispatch } from '../core/Store';
import Router from '../core/Router';
import { Routes } from '../core/routes';

const api = new AuthAPI();

export class AuthService {
  public async register(
    dispatch: Dispatch<AppState>,
    state: AppState,
    action: SignUpFormData,
  ) {
    dispatch({ isLoading: true });

    const response = await api.signUp(action);

    if (response.status !== 200) {
      dispatch({ isLoading: false });
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({
      isLoading: false,
      user: {
        id: JSON.parse(response.responseText).id,
        firstName: action.firstName,
        secondName: action.secondName,
        login: action.login,
        email: action.email,
        phone: action.phone,
        displayName: null,
        avatar: null,
      },
    });

    new Router().go(Routes.Index);
  }

  public async getUser() {
    // if (this.store.getState().user !== null) {
    //   return this.store.getState().user;
    // }

    const res = await api.getUser();

    if (res.status !== 200) {
      throw new Error(JSON.parse(res.responseText).reason);
    }

    // this.store.setState({ user: mapRawToUser(JSON.parse(res.responseText)) });
    // return this.store.getState().user;
  }
}
