import Block from '../../utils/Block';
import template from './login.hbs';
import { loginData } from './login.data';
import FormField from '../../components/FormField';
import styles from './login.pcss';

export class LoginPage extends Block {
  constructor() {
    super({ styles });
  }

  protected initChildren() {
    this.children.formFieldLogin = new FormField(loginData.formFields[0]);
    this.children.formFieldPassword = new FormField(loginData.formFields[1]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
