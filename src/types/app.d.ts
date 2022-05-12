import { Store } from '../core/Store';
import Router from '../core/Router';

declare global {
  export type Indexed<T = unknown> = {
    [key in string]: T;
  };
  export type Nullable<T> = T | null;

  export type AppState = {
    appIsInited: boolean,
    // todo - вынести signUpFormError, signInFormError в локальный стейт
    signUpFormError: string,
    signInFormError: string,
    isLoading: boolean,
    isAuth: boolean,
    activeChatId: Nullable<number>,
    chats: Nullable<Chat[]>,
    chatUsers: Nullable<User[]>,
    searchResult: Nullable<User[]>,
    user: Nullable<User>,
  };

  interface Window {
    store: Store<AppState>;
    router: Router;
  }

  export type User = {
    id: number,
    login: string,
    firstName: string,
    secondName: string,
    displayName: Nullable<string>,
    avatar: Nullable<string>,
    phone: string,
    email: string,
  }

  export type Interlocutor = Omit<User, 'id' | 'displayName'>

  type ChatLastMessage = {
    user: Interlocutor,
    time: Date,
    content: string
  }

  export type Chat = {
    id: number,
    title: string,
    avatar: Nullable<string>,
    unreadCount: number,
    lastMessage: Nullable<ChatLastMessage>
  }
}
