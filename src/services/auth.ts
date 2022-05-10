import AuthAPI from '../api/auth-api';
import { SignInFormData, SignUpFormData } from '../api/auth-api.model';
import { Dispatch } from '../core/Store';
import { Routes } from '../core/routes';
import { mapRawToUser } from '../api/auth-api.mappers';
import UserAPI from '../api/user-api';

const authAPI = new AuthAPI();
const userApi = new UserAPI();

// todo - обработка error-cases
export class AuthService {
  public async register(
    dispatch: Dispatch<AppState>,
    _: any,
    action: SignUpFormData,
  ) {
    dispatch({ isLoading: true });

    const response = await authAPI.signUp(action);

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({
      isAuth: true,
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

    window.router.go(Routes.Index);
  }

  public async login(dispatch: Dispatch<AppState>, _:any, action: SignInFormData) {
    dispatch({ isLoading: true });

    const loginResponse = await authAPI.signIn(action);

    dispatch({ isLoading: false });

    if (loginResponse.status !== 200) {
      throw new Error(JSON.parse(loginResponse.responseText).reason);
    }

    dispatch({
      isAuth: true,
    });

    const getUserResponse = await userApi.getUser();

    dispatch({ isLoading: false });

    if (getUserResponse.status !== 200) {
      throw new Error(JSON.parse(getUserResponse.responseText).reason);
    }

    dispatch({
      user: mapRawToUser(JSON.parse(getUserResponse.responseText)),
    });

    window.router.go(Routes.Index);
  }

  public async logout(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    await authAPI.logout();

    dispatch({ isLoading: false, isAuth: false, user: null });

    window.router.go(Routes.SignIn);
  }
}
