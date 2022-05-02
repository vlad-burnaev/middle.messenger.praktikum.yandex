import { Store } from '../core/Store';
import Router from '../core/Router';

declare global {
  export type Indexed<T = unknown> = {
    [key in string]: T;
  };
  export type Nullable<T> = T | null;

  export type AppState = {
    isLoading: boolean,
    isAuth: boolean,
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
}

export { };
