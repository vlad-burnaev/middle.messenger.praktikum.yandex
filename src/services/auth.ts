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

    const loginResponse = await api.signIn(action);

    if (loginResponse.status !== 200) {
      dispatch({ isLoading: false });
      throw new Error(JSON.parse(loginResponse.responseText).reason);
    }

    dispatch({
      isAuth: true,
    });

    const getUserResponse = await api.getUser();

    if (getUserResponse.status !== 200) {
      dispatch({ isLoading: false });
      throw new Error(JSON.parse(getUserResponse.responseText).reason);
    }

    dispatch({
      isLoading: false,
      user: JSON.parse(getUserResponse.responseText),
    });

    router.go(Routes.Index);
  }

  public async logout(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    await api.logout();

    dispatch({ isLoading: false, isAuth: false, user: null });

    router.go(Routes.SignIn);
  }
}
