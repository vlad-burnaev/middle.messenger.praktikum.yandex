import { Dispatch } from '../core/Store';
import { ProfileChangePasswordData, ProfileEditData } from '../api/user-api.model';
import UserApi from '../api/user-api';
import { mapRawToUser } from '../api/auth-api.mappers';
import Router from '../core/Router';
import { Routes } from '../core/routes';

const api = new UserApi();
const router = new Router();

export class UserService {
  public async editProfile(dispatch: Dispatch<AppState>, _: any, action: ProfileEditData) {
    dispatch({ isLoading: true });

    const response = await api.editProfile(action);

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({ user: mapRawToUser(JSON.parse(response.responseText)) });
  }

  public async changePassword(dispatch: Dispatch<AppState>, _: any, action: ProfileChangePasswordData) {
    dispatch({ isLoading: true });

    const response = await api.changePassword(action);

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    router.go(Routes.Profile);
  }
}
