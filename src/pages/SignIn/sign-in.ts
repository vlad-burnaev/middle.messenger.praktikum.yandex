import Block from '../../core/Block';
import template from './sign-in.hbs';
import { signInData } from './sign-in.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';
import { AuthService } from '../../services/auth';
import { withStore } from '../../utils/withStore';
import { Store } from '../../core/Store';
import Router from '../../core/Router';
import { Routes } from '../../core/routes';

const authService = new AuthService();

class SignIn extends Block {
  constructor(props: {store: Store<AppState>}) {
    super({ ...props, ...signInData });
  }

  private inputsState: Record<string, {value: string, isValid: boolean}> = {
    login: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  }

  private setValidationStatus: any;

  // todo - разобраться почему не работает
  componentDidUpdate() {
    if (this.props.store.getState().user) {
      new Router().go(Routes.Index);
    }
    return true;
  }

  initChildren() {
    this.setValidationStatus = (props: { name: string, value: string, status: boolean }) => {
      const { name, value, status } = props;
      this.inputsState[name].isValid = status;
      this.inputsState[name].value = value;

      const isFormValid = Object.values(this.inputsState)
        .map(({ isValid }) => isValid)
        .every((v) => v);
      this.children.submitButton.setProps({ isDisabled: !isFormValid });
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
          const isFormValid = Object.values(this.inputsState)
            .map(({ isValid }) => isValid)
            .every((v) => v);
          // todo - разобраться почему кнопка кликается только со второго раза
          if (isFormValid) {
            this.props.store.dispatch(authService.login, {
              login: this.inputsState.login.value,
              password: this.inputsState.password.value,
            });
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

export default withStore(SignIn);
