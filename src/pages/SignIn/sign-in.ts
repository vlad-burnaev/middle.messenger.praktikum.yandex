import Block from '../../utils/Block';
import template from './sign-in.hbs';
import { signInData } from './sign-in.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignIn extends Block {
  constructor() {
    super({ ...signInData });
  }

  private formData = {
    login: '',
    password: '',
  }

  initChildren() {
    this.children.formFieldLogin = new FormField({
      ...signInData.formFields.login,
      events: {
        change: (e) => this.formData.login = e.target.value,
      },
    });
    this.children.formFieldPassword = new FormField({
      ...signInData.formFields.password,
      events: {
        change: (e) => this.formData.password = e.target.value,
      },
    });
    this.children.submitButton = new Button({
      ...signInData.submitButton,
      events: {
        click: () => {
          console.log(this.formData);
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
