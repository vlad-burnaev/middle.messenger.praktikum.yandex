import Block from '../../core/Block';
import template from './sign-in.hbs';
import { signInData } from './sign-in.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { router } from '../../index';
import { Routes } from '../../core/routes';
import Navbar from '../../components/Navbar';

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
          // todo - разобраться почему кнопка кликается не всегда или не с первого раза
          if (isValid) {
            router.go(Routes.Index);
            console.log('Форма заполнена верно');
          } else {
            console.error('Форма заполнена неверно');
          }
        },
      },
    });
    this.children.noAccountLink = new Link({
      ...signInData.secondaryButton,
      classNames: ['form__secondary-button'],
    });

    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
