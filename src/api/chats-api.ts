import HTTPTransport from '../core/HTTPTransport';

const BASE_URL = '/chats';
const getURL = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default class ChatsApi {
  private api = HTTPTransport.getInstance();

  public getChats() {
    return this.api.get(BASE_URL);
  }
}
