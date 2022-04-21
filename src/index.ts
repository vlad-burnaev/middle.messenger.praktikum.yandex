import './styles/index.pcss';
import Router from './core/Router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import ProfileMain from './pages/Profile/Main';
import ProfileEditData from './pages/Profile/EditData';
import ProfileChangePassword from './pages/Profile/ChangePassword';
import Error404 from './pages/404';
import Error500 from './pages/500';
import { APP_ROOT_PATH } from './utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const res = {};
    const form = e.target as HTMLElement;
    if (form) {
      const inputs = form.querySelectorAll('input');
      [...inputs].forEach((input) => res[input.id] = input.value);

      console.log(res);
    }
  });

  const router = new Router(APP_ROOT_PATH);
  router
    .use('/', Main)
    .use('/sign-in', SignIn)
    .use('/sign-up', SignUp)
    .use('/profile', ProfileMain)
    .use('/edit-profile', ProfileEditData)
    .use('/change-password', ProfileChangePassword)
    .use('/404', Error404)
    .use('/500', Error500)
    .start();
});
