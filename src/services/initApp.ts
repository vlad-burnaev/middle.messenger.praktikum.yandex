import { Dispatch } from '../core/Store';
import { mapRawToUser } from '../api/auth-api.mappers';
import UserAPI from '../api/user-api';

const userAPI = new UserAPI();

export class InitAppService {
  public async init(dispatch: Dispatch<AppState>) {
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

    dispatch({ appIsInited: true, isAuth: true, user: mapRawToUser(response) });
  }
}
