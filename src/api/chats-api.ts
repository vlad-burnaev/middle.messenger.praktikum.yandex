import HTTPTransport from '../core/HTTPTransport';
import { ChatDTO, CreateChatRequest } from './types/chats';

const BASE_URL = '/chats';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default class ChatsApi {
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
}
