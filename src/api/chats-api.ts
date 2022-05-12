import HTTPTransport from '../core/HTTPTransport';
import {
  AddUserToChatRequest,
  ChatDTO,
  CreateChatRequest,
  DeleteUserFromChatRequest,
  GetChatTokenRequest,
  GetChatTokenResponse,
  SearchUserRequest,
} from './types/chats';
import { UserDTO } from './types/user';

const BASE_URL = '/chats';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

class ChatsApiClass {
  private api = new HTTPTransport();

  public getChats() {
    return this.api.get(BASE_URL)
      .then(({ response }) => response as ChatDTO[]);
  }

  public createChat(data: CreateChatRequest) {
    const options = {
      data: {
        title: data.title,
      },
    };

    return this.api.post(BASE_URL, options)
      .then(({ response }) => response);
  }

  public getChatUsers(data: GetChatTokenRequest) {
    return this.api.get(getURL(`${data.chatId}/users`))
      .then(({ response }) => response as UserDTO[]);
  }

  public searchUser(data: SearchUserRequest) {
    const options = {
      data,
    };

    return this.api.post('/user/search', options)
      .then(({ response }) => response as UserDTO[]);
  }

  public addUserToChat(data: AddUserToChatRequest) {
    const options = {
      data,
    };

    return this.api.put(getURL('users'), options)
      .then(({ response }) => response);
  }

  public deleteUserFromChat(data: DeleteUserFromChatRequest) {
    const options = {
      data,
    };

    return this.api.delete(getURL('users'), options)
      .then(({ response }) => response);
  }

  public getChatToken(data: GetChatTokenRequest) {
    return this.api.post(getURL(`token/${data.chatId}`))
      .then(({ response }) => response as GetChatTokenResponse);
  }
}

export const ChatsApi = new ChatsApiClass();
