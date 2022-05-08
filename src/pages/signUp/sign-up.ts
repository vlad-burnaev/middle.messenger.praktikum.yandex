import { withStore } from '../../utils/withStore';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import { withRouter } from '../../utils/withRouter';
import { Routes } from '../../core/routes';
import Router from '../../core/Router';
import { AuthService } from '../../services/auth';

interface ISignupProps {
  router: Router,
  isLoading: boolean,
  signupFormError: string,
  formError?: () => string | null,
  dispatch: Dispatch<AppState>
}

enum SignupField {
  email = 'email',
  login = 'login',
  firstName = 'firstName',
  secondName = 'secondName',
  phone = 'phone',
  password = 'password',
  repeatPassword = 'repeatPassword'
}

const authService = new AuthService();

class SignUp extends Block<ISignupProps> {
  protected getStateFromProps() {
    const values: Record<string, string> = {};
    const errors: Record<string, string> = {};

    (Object.keys(SignupField) as Array<keyof typeof SignupField>).map((key) => {
      values[key] = '';
      errors[key] = '';
    });
    this.state = {
      isFormValid: false,
      values,
      errors,
      goToLoginLink: {
        onClick: () => this.props.router.go(Routes.SignIn),
        label: 'Войти',
      },
      handleSignup: () => {
        if (this.state.isFormValid) {
          const signupData = this.state.values;
          this.props.dispatch(authService.register, signupData);
        }
      },
      handleStateChange: ({ field, value, error }: {
        field: SignupField,
        value: string,
        error: string
      }) => {
        const nextState = {
          ...this.state,
        };

        nextState.values[field] = value;
        nextState.errors[field] = error;

        let isFormValid = true;

        Object.keys(nextState.values).every((key: string) => {
          if ((!nextState.values[key]) || (nextState.values[key] && nextState.errors[key])) {
            isFormValid = false;
            return false;
          }
          return true;
        });

        nextState.isFormValid = isFormValid;

        this.setState(nextState);
      },
    };
  }

  render() {
    const { isLoading, signupFormError } = this.props;

    const inputs = (Object.keys(SignupField) as Array<keyof typeof SignupField>)
      .map((key) => ({
        name: key,
        value: this.state.values[key],
        error: this.state.errors[key],
      }));

    return `
      {{{AuthForm
          id='signup'
          name='signup-form'
          title='Регистрация'
          ref='form'
          className='sign-up-form'
          inputs='${JSON.stringify(inputs)}'
          submitBtn='Зарегистрироваться'
          onSubmit=handleSignup
          link=goToLoginLink
          update=handleStateChange
          formError="${signupFormError}"
          isLoading=${isLoading}
          isFormValid=isFormValid
      }}}
    `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    isLoading: state.isLoading,
    signupFormError: state.signInFormError,
  };
}

export default withRouter<ISignupProps>(
  withStore<ISignupProps>(
    SignUp,
    mapStateToProps,
  ),
);
