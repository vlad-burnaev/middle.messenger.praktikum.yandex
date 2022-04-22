import Block from '../../core/Block';
import template from './navbar.hbs';
import styles from './navbar.pcss';
import { Routes } from '../../core/routes';

// todo - выпилить после настройки роутинга и интеграции с API
export class Navbar extends Block {
  constructor() {
    const links = [
      Routes.Index,
      Routes.SignIn,
      Routes.SignUp,
      Routes.Profile,
      Routes.EditProfile,
      Routes.ChangePassword,
      Routes.Page404,
      Routes.Page500,
    ];
    super({ links, styles });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
