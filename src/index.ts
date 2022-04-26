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
import { Routes } from './core/routes';

export const router = new Router();

document.addEventListener('DOMContentLoaded', () => {
  router
    .use(Routes.Index, Main)
    .use(Routes.SignIn, SignIn)
    .use(Routes.SignUp, SignUp)
    .use(Routes.Profile, ProfileMain)
    .use(Routes.EditProfile, ProfileEditData)
    .use(Routes.ChangePassword, ProfileChangePassword)
    .use(Routes.Page404, Error404)
    .use(Routes.Page500, Error500)
    .start();
});
