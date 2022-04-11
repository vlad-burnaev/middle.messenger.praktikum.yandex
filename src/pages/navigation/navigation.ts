import Block from '../../utils/Block';
import template from './navigation.hbs';
import Button from '../../components/Button';
import { renderDOM } from '../../utils/renderDOM';
import Main from '../Main';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Error404 from '../404';
import Error500 from '../500';
import ProfileMain from '../Profile/Main';
import ProfileEditData from '../Profile/EditData';
import ProfileChangePassword from '../Profile/ChangePassword';
import * as styles from './navigation.pcss';

export class Navigation extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    const signIn = new SignIn();
    const signUp = new SignUp();
    const error404 = new Error404();
    const error500 = new Error500();
    const profileMain = new ProfileMain();
    const profileEditData = new ProfileEditData();
    const profileChangePassword = new ProfileChangePassword();
    const main = new Main();

    this.children.button404 = new Button({
      label: '404',
      events: {
        click: () => {
          renderDOM('#app', error404);
        },
      },
    });
    this.children.button500 = new Button({
      label: '500',
      events: {
        click: () => {
          renderDOM('#app', error500);
        },
      },
    });
    this.children.buttonSignUp = new Button({
      label: 'SignUp',
      events: {
        click: () => {
          renderDOM('#app', signUp);
        },
      },
    });
    this.children.buttonSignIn = new Button({
      label: 'SignIn',
      events: {
        click: () => {
          renderDOM('#app', signIn);
        },
      },
    });
    this.children.buttonMain = new Button({
      label: 'Main',
      events: {
        click: () => {
          renderDOM('#app', main);
        },
      },
    });
    this.children.buttonProfileMain = new Button({
      label: 'ProfileMain',
      events: {
        click: () => {
          renderDOM('#app', profileMain);
        },
      },
    });
    this.children.buttonProfileEditData = new Button({
      label: 'ProfileEditData',
      events: {
        click: () => {
          renderDOM('#app', profileEditData);
        },
      },
    });
    this.children.buttonProfileChangePassword = new Button({
      label: 'ProfileChangePassword',
      events: {
        click: () => {
          renderDOM('#app', profileChangePassword);
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
