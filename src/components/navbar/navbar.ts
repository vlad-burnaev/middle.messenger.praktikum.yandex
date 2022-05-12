// todo - выпилить после настройки роутинга и интеграции с API
import Block from '../../core/Block';
import { Routes } from '../../core/routes';
import './navbar.scss';

class Navbar extends Block<{}> {
  getStateFromProps() {
    this.state = {
      links: Object.entries(Routes)
        .map((pair) => {
          return {
            label: pair[0],
            onClick: () => {
              window.router.go(pair[1]);
            },
          };
        }),
    };
  }

  render() {
    // language=hbs
    return `
      <nav class="navbar">
        <ul class="navbar__links">
          {{#each links}}
              <li class="navbar__link">
                  {{{ Link label=label onClick=onClick }}}
              </li>
          {{/each}}
        </ul>
      </nav>
    `;
  }
}

export default Navbar;
