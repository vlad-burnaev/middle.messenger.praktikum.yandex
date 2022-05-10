import ChatsApi from '../api/chats-api';
import { Dispatch } from '../core/Store';
import { apiHasError } from '../helpers/apiHasError';
import { mapChats } from '../api/types/chats';

const api = new ChatsApi();

export class ChatsService {
  public async getChats(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await api.getChats();

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({ chats: mapChats(response) });
  }
}
