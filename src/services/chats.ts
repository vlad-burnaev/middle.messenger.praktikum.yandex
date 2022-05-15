import { Dispatch } from '../core/Store';
import { apiHasError } from '../helpers/apiHasError';
import {
  AddUserToChatRequest,
  CreateChatRequest,
  DeleteUserFromChatRequest,
  GetChatTokenRequest,
  mapChats,
  MessageDTO,
  SearchUserRequest,
  SendMessageData,
} from '../api/types/chats';
import { mapUser } from '../api/types/user';
import { ChatsApi } from '../api/chats-api';
import { WS_API_BASE_URL } from '../utils/constants';

const mapPrevMessage = (data: MessageDTO): Message => {
  return {
    chatId: data.chat_id,
    content: data.content,
    file: data.file,
    id: data.id,
    isRead: data.is_read,
    time: new Date(data.time),
    type: data.type,
    userId: data.user_id,
  };
};

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

  // todo - вынести в отдельный файл, порефачить
  public async createWSConnection(dispatch: Dispatch<AppState>, state: AppState, action: GetChatTokenRequest) {
    dispatch({ isLoading: true });

    const response = await ChatsApi.getChatToken(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    const userId = state.user?.id;

    const socket = new WebSocket(`${WS_API_BASE_URL}/chats/${userId}/${action.chatId}/${response.token}`);

    dispatch({ ws: socket });

    socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));

      // todo - убивать при смене чата
      setInterval(() => {
        socket.send(JSON.stringify({
          type: 'ping',
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
      // todo - типизировать полученные сообщения (TypeGuard)
      const data = JSON.parse(event.data);
      console.log('Получены данные', data);
      if (Array.isArray(data)) {
        const prevMessages = data.map((message) => {
          return mapPrevMessage(message);
        });
        dispatch({ chatMessages: prevMessages });
      }

      const prevMessages = window.store.getState().chatMessages;
      if (data.type === 'message') {
        const newMessage: Message = {
          chatId: state.activeChatId ?? 0,
          content: data.content,
          file: null,
          id: prevMessages[0]?.id ? prevMessages[0]?.id - 1 : 0,
          isRead: false,
          time: new Date(data.time),
          type: 'message',
          userId: data.user_id,
        };
        dispatch({ chatMessages: prevMessages ? [newMessage, ...prevMessages] : [newMessage] });
      }
    });

    socket.addEventListener('error', (event: Event) => {
      console.log('Ошибка', event.message);
    });
  }

  public async sendMessage(dispatch: Dispatch<AppState>, state: AppState, action: SendMessageData) {
    if (!state.ws || !state.user) {
      return;
    }

    state.ws.send(JSON.stringify({
      content: action.message,
      type: 'message',
    }));
  }
}

export const ChatsService = new ChatsServiceClass();
