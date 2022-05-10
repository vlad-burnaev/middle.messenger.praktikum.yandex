import HTTPTransport from '../core/HTTPTransport';
import { ChatDTO } from './types/chats';

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
}
