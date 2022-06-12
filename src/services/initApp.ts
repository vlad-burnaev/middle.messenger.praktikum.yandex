import { Dispatch } from '../core/Store';
import UserAPI from '../api/user-api';
import { apiHasError } from '../helpers/apiHasError';
import { mapUser } from '../api/types/user';

const userAPI = new UserAPI();

export class InitAppService {
  public async init(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    try {
      const response = await userAPI.getUser();

      dispatch({ isLoading: false });

      if (apiHasError(response)) {
        return;
      }

      dispatch({ appIsInited: true, isAuth: true, user: mapUser(response) });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      dispatch({ appIsInited: true });
    }
  }
}
