import { renderDOM } from './utils/renderDOM';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './styles/index.pcss';

document.addEventListener('DOMContentLoaded', () => {
  const signIn = new SignIn();
  const signUp = new SignUp();

  renderDOM('#app', signUp);
});
