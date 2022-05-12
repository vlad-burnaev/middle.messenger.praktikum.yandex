import { Dispatch } from '../core/Store';
import { apiHasError } from '../helpers/apiHasError';
import {
  AddUserToChatRequest, CreateChatRequest, DeleteUserFromChatRequest, GetChatTokenRequest, mapChats, SearchUserRequest,
} from '../api/types/chats';
import { mapUser } from '../api/types/user';
import { ChatsApi } from '../api/chats-api';
import { WS_API_BASE_URL } from '../utils/constants';

class ChatsServiceClass {
  public async getChats(dispatch: Dispatch<AppState>) {
    dispatch({ isLoading: true });

    const response = await ChatsApi.getChats();

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({ chats: mapChats(response) });
  }

  public async createChat(dispatch: Dispatch<AppState>, _: any, action: CreateChatRequest) {
    const self = this;

    dispatch({ isLoading: true });

    const response = await ChatsApi.createChat(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    // todo - не работает обновление списка чатов (self = undefined)
    location.reload();
    dispatch(self.getChats);
  }

  public async getChatUsers(dispatch: Dispatch<AppState>, _: any, action: GetChatTokenRequest) {
    dispatch({ isLoading: true });

    const response = await ChatsApi.getChatUsers(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({
      chatUsers: response.map((userDTO) => mapUser(userDTO)),
    });
  }

  public async searchUser(dispatch: Dispatch<AppState>, _: any, action: SearchUserRequest) {
    dispatch({ isLoading: true });

    const response = await ChatsApi.searchUser(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    dispatch({
      searchResult: response.map((userDTO) => mapUser(userDTO)),
    });
  }

  public async addUserToChat(dispatch: Dispatch<AppState>, _: any, action: AddUserToChatRequest) {
    const self = this;

    dispatch({ isLoading: true });

    const response = await ChatsApi.addUserToChat(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    // todo - не работает обновление юзеров чата (self = undefined)
    location.reload();
    dispatch(self.getChatUsers);
  }

  public async deleteUserFromChat(dispatch: Dispatch<AppState>, _: any, action: DeleteUserFromChatRequest) {
    const self = this;

    dispatch({ isLoading: true });

    const response = await ChatsApi.deleteUserFromChat(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    // todo - не работает обновление юзеров чата (self = undefined)
    location.reload();
    dispatch(self.getChatUsers);
  }

  public async createWSConnection(dispatch: Dispatch<AppState>, state: AppState, action: GetChatTokenRequest) {
    dispatch({ isLoading: true });

    const response = await ChatsApi.getChatToken(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    const userId = state.user?.id;

    const socket = new WebSocket(`${WS_API_BASE_URL}/chats/${userId}/${action.chatId}/${response.token}`);

    socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      socket.send(JSON.stringify({
        content: 'Hello World!',
        type: 'message',
      }));

      // todo - убивать при смене чата
      setInterval(() => {
        socket.send(JSON.stringify({
          content: 'ping',
          type: 'message',
        }));
      }, 20000);
    });

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener('message', (event) => {
      console.log('Получены данные', event.data);
    });

    socket.addEventListener('error', (event: Event) => {
      console.log('Ошибка', event.message);
    });
  }
}

export const ChatsService = new ChatsServiceClass();
