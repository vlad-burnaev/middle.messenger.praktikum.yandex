import { Dispatch } from '../core/Store';
import { ProfileChangePasswordData, ProfileEditData } from '../api/user-api.model';
import UserAPI from '../api/user-api';
import { mapRawToUser } from '../api/auth-api.mappers';
import { Routes } from '../core/routes';

const userAPI = new UserAPI();

export class UserService {
  public async getUser(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await userAPI.getUser();

    dispatch({ isLoading: false });

    if (response.status === 401) {
      dispatch({ isAuth: false });
      // new Router().go(Routes.SignIn);
    }

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({ isAuth: true, user: mapRawToUser(JSON.parse(response.responseText)) });
  }

  public async editProfile(dispatch: Dispatch<AppState>, _: any, action: ProfileEditData) {
    dispatch({ isLoading: true });

    const response = await userAPI.editProfile(action);

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({ user: mapRawToUser(JSON.parse(response.responseText)) });
  }

  public async changePassword(dispatch: Dispatch<AppState>, _: any, action: ProfileChangePasswordData) {
    dispatch({ isLoading: true });

    const response = await userAPI.changePassword(action);

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    window.router.go(Routes.Profile);
  }
}
