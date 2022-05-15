import './authForm.scss';
import {
  IFormInputData,
  InputType,
} from './types';
import ERROR_MESSAGES from './const/errors';
import isValid from '../../helpers/formValidation';
import Block from '../../core/Block';

type UpdateState = {
  field: string,
  value: string,
  error: string,
}
interface ISubmitBtn {
  label: string
}
interface IFormProps {
  id: string,
  name: string,
  title?: string,
  className: string,
  inputs: string,
  submitBtn: ISubmitBtn,
  link?: {
    onClick: () => void,
    label: string
  },
  readonly?: boolean,
  isFormValid: boolean,
  update: ({ field, value, error }: UpdateState) => void,
  onSubmit: () => void,
}

interface AuthFormProps extends Omit<IFormProps, 'inputs'> {
  inputsData: Record<string, IFormInputData>
  inputs: IFormInputData[],
}

class AuthForm extends Block<AuthFormProps> {
  constructor(props: IFormProps) {
    const inputs = JSON.parse(props.inputs as string) as IFormInputData[];
    const inputsData: Record<string, IFormInputData> = {};
    inputs.forEach((input: IFormInputData) => {
      inputsData[input.name] = { ...input };
    });

    super({
      ...props,
      inputs,
      inputsData,
    });
  }

  protected getStateFromProps() {
    this.state = {
      onFocus: this.handleInputEvents.bind(this),
      onBlur: this.handleInputEvents.bind(this),
      handleSubmit: this.handleFormSubmit.bind(this),
    };
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();

    this.props.onSubmit();
  }

  handleInputEvents(e: Event) {
    if (e.target) {
      const element = e.target as HTMLInputElement;
      this.validateInput(element.name as InputType);
    }
  }

  validateInput(field: InputType) {
    const newValue = (this.refs[field].querySelector('input') as HTMLInputElement).value;
    const { emptyFieldError, generalError } = ERROR_MESSAGES[field];
    let errorMessage = '';
    if (!newValue) {
      errorMessage = emptyFieldError || generalError;
    } else if (!isValid(field, newValue)) {
      errorMessage = generalError;
    }

    this.props.update({
      field,
      value: newValue,
      error: errorMessage,
    });

    return errorMessage === '';
  }

  render() {
    const { isFormValid } = this.props;

    // language=hbs
    return `
      <form id={{id}} class="form {{className}}">
        <div class='form__container'>
          {{#if title}}
            <h3 class='form__title'>{{title}}</h3>
          {{/if}}
          
          {{#ifEquals name "login-form"}}
            {{#if inputsData.login}}
              {{{ InputField 
                    value=inputsData.login.value
                    ref="login"
                    type="text"
                    name="login"
                    label="Логин"
                    errorMessage=inputsData.login.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}

            {{#if inputsData.password}}
              {{{ InputField 
                    value=inputsData.password.value
                    ref="password"
                    type="password"
                    name="password"
                    label="Пароль"
                    errorMessage=inputsData.password.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}
          {{/ifEquals}}

          {{#ifEquals name "signup-form"}}
            {{#if inputsData.email}}
              {{{ InputField 
                    value=inputsData.email.value
                    ref="email"
                    type="email"
                    name="email"
                    label="Почта"
                    errorMessage=inputsData.email.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}

            {{#if inputsData.login}}
              {{{ InputField 
                    value=inputsData.login.value
                    ref="login"
                    type="text"
                    name="login"
                    label="Логин"
                    errorMessage=inputsData.login.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}

            {{#if inputsData.firstName}}
              {{{ InputField 
                    value=inputsData.firstName.value
                    ref="firstName"
                    type="text"
                    name="firstName"
                    label="Имя"
                    errorMessage=inputsData.firstName.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}

          {{#if inputsData.secondName}}
            {{{ InputField 
                  value=inputsData.secondName.value
                  ref="secondName"
                  type="text"
                  name="secondName"
                  label="Фамилия"
                  errorMessage=inputsData.secondName.error
                  isFormInput=true
                  onBlur=onBlur
            }}}
          {{/if}}

          {{#if inputsData.phone}}
            {{{ InputField 
                  value=inputsData.phone.value
                  ref="phone"
                  type="tel"
                  name="phone"
                  label="Телефон"
                  errorMessage=inputsData.phone.error
                  isFormInput=true
                  onBlur=onBlur
            }}}
          {{/if}}

            {{#if inputsData.password}}
              {{{ InputField 
                    value=inputsData.password.value
                    ref="password"
                    type="password"
                    name="password"
                    label="Пароль"
                    errorMessage=inputsData.password.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}

            {{#if inputsData.repeatPassword}}
              {{{ InputField 
                    value=inputsData.repeatPassword.value
                    ref="repeatPassword"
                    type="password"
                    name="repeatPassword"
                    label="Пароль еще раз"
                    errorMessage=inputsData.repeatPassword.error
                    isFormInput=true
                    onBlur=onBlur
              }}}
            {{/if}}
          {{/ifEquals}}
          <div class="form__submit-btn-wrap">
            {{{ Button 
                  label=submitBtn 
                  className='form__submit-btn' 
                  onClick=handleSubmit 
                  isLoading=isLoading 
                  disabled=${!isFormValid} }}}
            {{{ Error value=formError }}}
          </div>
          {{{ Link label=link.label className="form__link" onClick=link.onClick }}}
      </form>
    `;
  }
}

export default AuthForm;
