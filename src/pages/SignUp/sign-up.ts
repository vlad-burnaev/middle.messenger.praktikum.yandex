import template from './sign-up.hbs';
import Block from '../../utils/Block';
import { signUpData } from './sign-up.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignUp extends Block {
  constructor() {
    super({ ...signUpData });
  }

  private formData = {
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    phone: '',
    password: '',
  }

  protected initChildren() {
    this.children.formfieldEmail = new FormField({
      ...signUpData.formfields[0],
      events: {
        change: (e) => {
          this.formData.email = e.target.value;
        },
      },
    });
    this.children.formfieldLogin = new FormField({
      ...signUpData.formfields[1],
      events: {
        change: (e) => {
          this.formData.login = e.target.value;
        },
      },
    });
    this.children.formfieldFirstName = new FormField({
      ...signUpData.formfields[2],
      events: {
        change: (e) => {
          this.formData.first_name = e.target.value;
        },
      },
    });
    this.children.formfieldSecondName = new FormField({
      ...signUpData.formfields[3],
      events: {
        change: (e) => {
          this.formData.second_name = e.target.value;
        },
      },
    });
    this.children.formfieldPhone = new FormField({
      ...signUpData.formfields[4],
      events: {
        change: (e) => {
          this.formData.phone = e.target.value;
        },
      },
    });
    this.children.formfieldPassword = new FormField({
      ...signUpData.formfields[5],
      events: {
        change: (e) => {
          this.formData.password = e.target.value;
        },
      },
    });
    this.children.formfieldPassword2 = new FormField({
      ...signUpData.formfields[6],
      events: {
        change: (e) => {
          this.formData.password = e.target.value;
        },
      },
    });
    this.children.submitButton = new Button({
      ...signUpData.submitButton,
      events: {
        click: () => console.log(this.formData),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
