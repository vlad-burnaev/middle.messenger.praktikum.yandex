import { renderDOM } from './utils/renderDOM';
import './styles/index.pcss';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Error404 from './pages/404';
import Error500 from './pages/500';
import ProfileMain from './pages/Profile/Main';
import ProfileEditData from './pages/Profile/EditData';
import ProfileChangePassword from './pages/Profile/ChangePassword';
import Main from './pages/Main';

document.addEventListener('DOMContentLoaded', () => {
  const signIn = new SignIn();
  const signUp = new SignUp();
  const error404 = new Error404();
  const error500 = new Error500();
  const profileMain = new ProfileMain();
  const profileEditData = new ProfileEditData();
  const profileChangePassword = new ProfileChangePassword();
  const main = new Main();

  renderDOM('#app', signIn);
});
