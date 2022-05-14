import AuthAPI from '../api/auth-api';
import { Dispatch } from '../core/Store';
import { Routes } from '../core/routes';
import UserAPI from '../api/user-api';
import { SignInRequest, SignUpRequest } from '../api/types/auth';
import { apiHasError } from '../helpers/apiHasError';
import { mapUser } from '../api/types/user';
import { defaultStoreState } from '../store';

const authAPI = new AuthAPI();
const userApi = new UserAPI();

// todo - обработка error-cases
export class AuthService {
  public async register(
    dispatch: Dispatch<AppState>,
    _: any,
    action: SignUpRequest,
  ) {
    dispatch({ isLoading: true });

    const response = await authAPI.signUp(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({
      isAuth: true,
      user: {
        id: response.id,
        firstName: action.firstName,
        secondName: action.secondName,
        login: action.login,
        email: action.email,
        phone: action.phone,
        displayName: null,
        avatar: null,
      },
    });

    window.router.go(Routes.Index);
  }

  public async login(dispatch: Dispatch<AppState>, _:any, action: SignInRequest) {
    dispatch({ isLoading: true });

    const loginResponse = await authAPI.signIn(action);

    dispatch({ isLoading: false });

    if (apiHasError(loginResponse)) {
      return;
    }

    dispatch({
      isAuth: true,
    });

    const getUserResponse = await userApi.getUser();

    dispatch({ isLoading: false });

    if (apiHasError(getUserResponse)) {
      return;
    }

    dispatch({
      user: mapUser(getUserResponse),
    });

    // todo - сделать через router.go (хак, из-за корявого Auth-редиректа)
    window.location.pathname = Routes.Index;
  }

  public async logout(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    await authAPI.logout();

    dispatch({ ...defaultStoreState });

    // todo - сделать через router.go (хак, из-за корявого Auth-редиректа)
    window.location.pathname = Routes.SignIn;
  }
}
