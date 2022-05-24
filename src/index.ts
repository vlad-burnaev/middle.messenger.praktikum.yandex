import './helpers/handlebarsHelpers';
import './styles/index.scss';
import Router from './core/Router';
import { Routes } from './core/routes';
import { Store } from './core/Store';
import { InitAppService } from './services/initApp';
import { defaultStoreState } from './store';
import registerComponent from './core/registerComponent';
import { AuthForm } from './components/authForm';
import { InputField } from './components/inputField';
import { Input } from './components/input';
import { Link } from './components/link';
import { Error } from './components/error';
import { ChatPreview } from './pages/main/components/chatPreview';
import { Message } from './pages/main/components/message';
import { Chat } from './pages/main/components/chat';
import { MessageGroup } from './pages/main/components/messageGroup';
import { Icon } from './components/icon';
import { Button } from './components/button';
import { ProfileForm } from './components/profileForm';
import { Error404 } from './pages/404';
import { Error500 } from './pages/500';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Main } from './pages/main';
import { Profile } from './pages/profile';
import { Avatar } from './components/avatar';
import { APP_ROOT_PATH } from './utils/constants';
import GoBackLink from './components/goBackLink/go-back-link';

export function registerComponents() {
  registerComponent(Icon, 'Icon');
  registerComponent(Button, 'Button');
  registerComponent(Link, 'Link');
  registerComponent(Error, 'Error');
  registerComponent(Input, 'Input');
  registerComponent(ChatPreview, 'ChatPreview');
  registerComponent(Chat, 'Chat');
  registerComponent(Message, 'Message');
  registerComponent(MessageGroup, 'MessageGroup');
  registerComponent(InputField, 'InputField');
  registerComponent(AuthForm, 'AuthForm');
  registerComponent(ProfileForm, 'ProfileForm');
  registerComponent(Avatar, 'Avatar');
  registerComponent(GoBackLink, 'GoBackLink');
}

export function initRouter(router: Router, store: Store<AppState>) {
  router
    .use(Routes.Index, Main)
    .use(Routes.SignIn, SignIn)
    .use(Routes.SignUp, SignUp)
    .use(Routes.Profile, Profile)
    .use(Routes.Page404, Error404)
    .use(Routes.Page500, Error500);

  store.on('changed', (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  registerComponents();

  const initAppService = new InitAppService();

  const store = new Store<AppState>(defaultStoreState);
  const router = new Router(APP_ROOT_PATH);
  window.router = router;
  window.store = store;

  store.on('changed', (_, nextState) => {
    console.log(
      '%cstore updated',
      'background: #222; color: #bada55',
      nextState,
    );
  });

  store.dispatch(initAppService.init);

  initRouter(router, store);
});
