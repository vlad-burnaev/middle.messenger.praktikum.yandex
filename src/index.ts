// todo - перейти с pcss на scss
import './styles/index.pcss';
import Router from './core/Router';
import { Routes } from './core/routes';
import { Store } from './core/Store';
import { InitAppService } from './services/initApp';
import registerComponent from './core/registerComponent';
import { defaultStoreState } from './store';
import { NewButton } from './components/NewButton';
import { NewLink } from './components/NewLink';
import { NewError404 } from './pages/New404';
import { NewError500 } from './pages/New500';

function registerComponents() {
  registerComponent(NewButton, 'NewButton');
  registerComponent(NewLink, 'NewLink');
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
    // .use(Routes.SignIn, SignIn)
    // .use(Routes.SignUp, SignUp)
    // .use(Routes.Profile, ProfileMain)
    // .use(Routes.EditProfile, ProfileEditData)
    // .use(Routes.ChangePassword, ProfileChangePassword)
    // .use(Routes.Page404, Error404)
    .use(Routes.Page404, NewError404)
    .use(Routes.Page500, NewError500)
    // .use(Routes.Page500, Error500)
    .start();
});
