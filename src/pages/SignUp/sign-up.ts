import template from './sign-up.hbs';
import Block from '../../utils/Block';
import { signUpData } from './sign-up.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignUp extends Block {
  constructor() {
    super({ ...signUpData });
  }

  protected initChildren() {
    this.children.formfieldEmail = new FormField(signUpData.formfields[0]);
    this.children.formfieldLogin = new FormField(signUpData.formfields[1]);
    this.children.formfieldFirstName = new FormField(signUpData.formfields[2]);
    this.children.formfieldSecondName = new FormField(signUpData.formfields[3]);
    this.children.formfieldPhone = new FormField(signUpData.formfields[4]);
    this.children.formfieldPassword = new FormField(signUpData.formfields[5]);
    this.children.formfieldPassword2 = new FormField(signUpData.formfields[6]);
    this.children.submitButton = new Button(signUpData.submitButton);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
