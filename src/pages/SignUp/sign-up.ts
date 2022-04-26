import template from './sign-up.hbs';
import Block from '../../core/Block';
import { signUpData } from './sign-up.data';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';
import { AuthService } from '../../services/auth';

const authService = new AuthService();

export class SignUp extends Block {
  constructor() {
    super({ ...signUpData });
  }

  private inputsState: Record<string, {value: string, isValid: boolean}> = {
    firstName: {
      value: '',
      isValid: false,
    },
    secondName: {
      value: '',
      isValid: false,
    },
    email: {
      value: '',
      isValid: false,
    },
    login: {
      value: '',
      isValid: false,
    },
    phone: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    passwordRepeat: {
      value: '',
      isValid: false,
    },
  }

  private setValidationStatus: any;

  protected initChildren() {
    this.setValidationStatus = (props: { name: string, value: string, status: boolean }) => {
      const { name, value, status } = props;
      this.inputsState[name].isValid = status;
      this.inputsState[name].value = value;

      const isFormValid = this.inputsState.password.value === this.inputsState.passwordRepeat.value
        && Object.values(this.inputsState)
          .map(({ isValid }) => isValid)
          .every((v) => v);
      this.children.submitButton.setProps({ isDisabled: !isFormValid });
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
      ...signUpData.formFields.firstName,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.formfieldSecondName = new FormField({
      ...signUpData.formFields.secondName,
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
      ...signUpData.formFields.passwordRepeat,
      setValidationStatus: this.setValidationStatus,
    });
    this.children.submitButton = new Button({
      ...signUpData.submitButton,
      events: {
        click: () => {
          const isFormValid = Object.values(this.inputsState).map(({ isValid }) => isValid).every((v) => v);
          if (isFormValid) {
            authService.register({
              firstName: this.inputsState.firstName.value,
              secondName: this.inputsState.secondName.value,
              email: this.inputsState.email.value,
              login: this.inputsState.login.value,
              password: this.inputsState.password.value,
              phone: this.inputsState.phone.value,
            });
          }
        },
      },
    });
    this.children.goToSignInLink = new Link({
      ...signUpData.secondaryButton,
      classNames: ['form__secondary-button'],
    });

    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
