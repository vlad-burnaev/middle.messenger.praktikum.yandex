import AuthAPI from '../api/auth-api';
import { SignInFormData, SignUpFormData } from '../api/auth-api.model';
import { Dispatch } from '../core/Store';
import Router from '../core/Router';
import { Routes } from '../core/routes';

const api = new AuthAPI();
const router = new Router();

// todo - обработка error-cases
export class AuthService {
  public async register(
    dispatch: Dispatch<AppState>,
    _: any,
    action: SignUpFormData,
  ) {
    dispatch({ isLoading: true });

    const response = await api.signUp(action);

    if (response.status !== 200) {
      dispatch({ isLoading: false });
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({
      isAuth: true,
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

  public async login(dispatch: Dispatch<AppState>, _:any, action: SignInFormData) {
    dispatch({ isLoading: true });

    const response = await api.signIn(action);

    if (response.status !== 200) {
      dispatch({ isLoading: false });
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({
      isLoading: false,
      isAuth: true,
    });

    router.go(Routes.Index);
  }

  public async logout(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    await api.logout();

    dispatch({ isLoading: false, user: null });

    router.go(Routes.SignIn);
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
