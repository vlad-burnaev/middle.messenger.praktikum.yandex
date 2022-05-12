import ChatsApi from '../api/chats-api';
import { Dispatch } from '../core/Store';
import { apiHasError } from '../helpers/apiHasError';
import {
  AddUserToChatRequest, CreateChatRequest, DeleteUserFromChatRequest, GetChatUsersRequest, mapChats, SearchUserRequest,
} from '../api/types/chats';
import { mapUser } from '../api/types/user';

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

    // todo - не работает обновление списка чатов (self = undefined)
    location.reload();
    dispatch(self.getChats);
  }

  public async getChatUsers(dispatch: Dispatch<AppState>, _: any, action: GetChatUsersRequest) {
    dispatch({ isLoading: true });

    const response = await api.getChatUsers(action);

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

    const response = await api.searchUser(action);

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

    const response = await api.addUserToChat(action);

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

    const response = await api.deleteUserFromChat(action);

    dispatch({ isLoading: false });

    if (apiHasError(response)) {
      return;
    }

    // todo - не работает обновление юзеров чата (self = undefined)
    location.reload();
    dispatch(self.getChatUsers);
  }
}

export const ChatsService = new ChatsServiceClass();
