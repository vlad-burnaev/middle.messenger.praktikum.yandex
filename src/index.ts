import { renderDOM } from './utils/renderDOM';
import LoginPage from './pages/Login';
import './styles/index.pcss';

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new LoginPage();

  renderDOM('#app', loginPage);
});
