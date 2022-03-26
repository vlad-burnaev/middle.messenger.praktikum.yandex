import { renderDOM } from './utils/renderDOM';
import './styles/index.pcss';
import Navigation from './pages/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const navigation = new Navigation();

  renderDOM('#app', navigation);
});
