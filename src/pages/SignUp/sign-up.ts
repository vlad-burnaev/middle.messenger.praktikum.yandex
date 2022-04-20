import template from './sign-up.hbs';
import Block from '../../utils/Block';
import { signUpData } from './sign-up.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignUp extends Block {
  constructor() {
    super({ ...signUpData });
  }

  private inputsValidationState = new Map<string, boolean>([
    ['email', false],
    ['login', false],
    ['first_name', false],
    ['second_name', false],
    ['phone', false],
    ['password', false],
    ['password_2', false],
  ]);

  private setValidationStatus: any;

  protected initChildren() {
    this.setValidationStatus = (name: string, status: boolean) => {
      this.inputsValidationState.set(name, status);
      const isValid = Array.from(this.inputsValidationState.values()).every((v) => v);
      this.children.submitButton.setProps({ isDisabled: !isValid });
    };
    this.children.formfieldEmail = new FormField({
      ...signUpData.formFields.email,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldLogin = new FormField({
      ...signUpData.formFields.login,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldFirstName = new FormField({
      ...signUpData.formFields.first_name,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldSecondName = new FormField({
      ...signUpData.formFields.second_name,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldPhone = new FormField({
      ...signUpData.formFields.phone,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldPassword = new FormField({
      ...signUpData.formFields.password,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldPassword2 = new FormField({
      ...signUpData.formFields.password_2,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.submitButton = new Button({
      ...signUpData.submitButton,
      events: {
        click: () => {
          const isValid = Array.from(this.inputsValidationState.values()).every((v) => v);
          if (isValid) {
            console.log('Форма заполнена верно');
          } else {
            console.error('Форма заполнена неверно');
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
