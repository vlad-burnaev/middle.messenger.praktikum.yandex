import Block from '../../utils/Block';
import template from './sign-in.hbs';
import { signInData } from './sign-in.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignIn extends Block {
  constructor() {
    super({ ...signInData });
  }

  initChildren() {
    this.children.formFieldLogin = new FormField(signInData.formFields[0]);
    this.children.formFieldPassword = new FormField(signInData.formFields[1]);
    this.children.submitButton = new Button(signInData.submitButton);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
