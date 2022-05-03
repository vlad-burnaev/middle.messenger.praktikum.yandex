import ChatsApi from '../api/chats-api';
import { Dispatch } from '../core/Store';
import { mapChats } from '../api/chats-api.mappers';

const api = new ChatsApi();

export class ChatsService {
  public async getChats(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await api.getChats();

    dispatch({ isLoading: false });

    if (response.status !== 200) {
      throw new Error(JSON.parse(response.responseText).reason);
    }

    dispatch({ chats: mapChats(JSON.parse(response.responseText)) });
  }
}
