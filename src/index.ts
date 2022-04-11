import { renderDOM } from './utils/renderDOM';
import './styles/index.pcss';
import Navigation from './pages/Nav';

document.addEventListener('DOMContentLoaded', () => {
  const navigation = new Navigation();

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

  renderDOM('#app', navigation);
});
