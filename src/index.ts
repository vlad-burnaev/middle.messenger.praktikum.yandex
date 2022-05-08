import './styles/index.scss';
import Router from './core/Router';
import { Routes } from './core/routes';
import { Store } from './core/Store';
import { InitAppService } from './services/initApp';
import registerComponent from './core/registerComponent';
import { defaultStoreState } from './store';
import { Error404 } from './pages/404';
import { Error500 } from './pages/500';
import { AuthForm } from './components/authForm';
import './helpers/handlebarsHelpers';
import { InputField } from './components/inputField';
import { Input } from './components/input';
import { Button } from './components/button';
import { Link } from './components/link';
import { Error } from './components/error';
import { SignUp } from './pages/signUp';
import { SignIn } from './pages/signIn';

function registerComponents() {
  registerComponent(Button, 'Button');
  registerComponent(Link, 'Link');
  registerComponent(Error, 'Error');
  registerComponent(Input, 'Input');
  registerComponent(InputField, 'InputField');
  registerComponent(AuthForm, 'AuthForm');
}

document.addEventListener('DOMContentLoaded', () => {
  registerComponents();

  const initAppService = new InitAppService();

  const store = new Store<AppState>(defaultStoreState);
  const router = new Router('#app');
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

  router
    .use(Routes.SignIn, SignIn)
    .use(Routes.SignUp, SignUp)
    .use(Routes.Page404, Error404)
    .use(Routes.Page500, Error500)
    .start();
});
