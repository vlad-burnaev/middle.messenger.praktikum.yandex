import ChatsApi from '../api/chats-api';
import { Dispatch } from '../core/Store';
import { apiHasError } from '../helpers/apiHasError';
import { CreateChatRequest, mapChats } from '../api/types/chats';

const api = new ChatsApi();

class ChatsServiceClass {
  public async getChats(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await api.getChats();

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({ chats: mapChats(response) });
  }

  public async createChat(dispatch: Dispatch<AppState>, _: any, action: CreateChatRequest) {
    const self = this;

    dispatch({ isLoading: true });

    const response = await api.createChat(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    // todo - не работает обновление списка чатов
    dispatch(self.getChats);
  }
}

export const ChatsService = new ChatsServiceClass();
