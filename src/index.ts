import { renderDOM } from './utils/renderDOM';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Error404 from './pages/404';
import Error500 from './pages/500';
import './styles/index.pcss';
import ProfileMain from './pages/Profile/Main';
import ProfileEditData from './pages/Profile/EditData';
import ProfileChangePassword from './pages/Profile/ChangePassword';

document.addEventListener('DOMContentLoaded', () => {
  const signIn = new SignIn();
  const signUp = new SignUp();
  const error404 = new Error404();
  const error500 = new Error500();
  const profileMain = new ProfileMain();
  const profileEditData = new ProfileEditData();
  const profileChangePassword = new ProfileChangePassword();

  renderDOM('#app', profileChangePassword);
});
