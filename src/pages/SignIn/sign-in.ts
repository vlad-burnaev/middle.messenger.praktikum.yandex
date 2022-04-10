import Block from '../../utils/Block';
import template from './sign-in.hbs';
import { signInData } from './sign-in.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export class SignIn extends Block {
  constructor() {
    super({ ...signInData });
  }

  private inputsValidationState = new Map<string, boolean>([['login', false], ['password', false]]);

  private setValidationStatus: any;

  initChildren() {
    this.setValidationStatus = (name: string, status: boolean) => {
      this.inputsValidationState.set(name, status);
      const isValid = Array.from(this.inputsValidationState.values()).every((v) => v);
      this.children.submitButton.setProps({ isDisabled: !isValid });
    };
    this.children.formFieldLogin = new FormField({
      ...signInData.formFields.login,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formFieldPassword = new FormField({
      ...signInData.formFields.password,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.submitButton = new Button({
      ...signInData.submitButton,
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
