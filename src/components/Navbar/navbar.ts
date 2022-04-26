import Block from '../../core/Block';
import template from './navbar.hbs';
import styles from './navbar.pcss';
import { Routes } from '../../core/routes';
import Link from '../Link';

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

  initChildren() {
    this.children.Index = new Link({ label: Routes.Index, path: Routes.Index });
    this.children.SignIn = new Link({ label: Routes.SignIn, path: Routes.SignIn });
    this.children.SignUp = new Link({ label: Routes.SignUp, path: Routes.SignUp });
    this.children.Profile = new Link({ label: Routes.Profile, path: Routes.Profile });
    this.children.EditProfile = new Link({ label: Routes.EditProfile, path: Routes.EditProfile });
    this.children.ChangePassword = new Link({ label: Routes.ChangePassword, path: Routes.ChangePassword });
    this.children.Page404 = new Link({ label: Routes.Page404, path: Routes.Page404 });
    this.children.Page500 = new Link({ label: Routes.Page500, path: Routes.Page500 });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
