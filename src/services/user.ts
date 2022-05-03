import { Dispatch } from '../core/Store';
import { ProfileEditData } from '../api/user-api.model';
import UserApi from '../api/user-api';
import { mapRawToUser } from '../api/auth-api.mappers';

const api = new UserApi();

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
}
