import { Dispatch } from '../core/Store';
import UserAPI from '../api/user-api';
import { apiHasError } from '../helpers/apiHasError';
import {
  ChangeAvatarRequest, mapUser, ProfileChangePasswordRequest, ProfileEditRequest,
} from '../api/types/user';
import { Routes } from '../core/routes';

const userAPI = new UserAPI();

export class UserService {
  public async getUser(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await userAPI.getUser();

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      dispatch({ isAuth: false });
      window.router.go(Routes.Page500);
      return;
    }

    dispatch({ isAuth: true, user: mapUser(response) });
  }

  public async editProfile(dispatch: Dispatch<AppState>, _: any, action: ProfileEditRequest) {
    dispatch({ isLoading: true });

    const response = await userAPI.editProfile(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      window.router.go(Routes.Page500);
      return;
    }

    dispatch({ user: mapUser(response) });
  }

  public async changePassword(dispatch: Dispatch<AppState>, _: any, action: ProfileChangePasswordRequest) {
    dispatch({ isLoading: true });

    const response = await userAPI.changePassword(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      window.router.go(Routes.Page500);
    }
  }

  public async changeAvatar(dispatch: Dispatch<AppState>, _:any, action: ChangeAvatarRequest) {
    dispatch({ isLoading: true });

    const response = await userAPI.changeAvatar(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      window.router.go(Routes.Page500);
      return;
    }

    dispatch({ user: mapUser(response) });
  }
}
