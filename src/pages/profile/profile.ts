import './profile.scss';
import { Views, IFormData } from './types';
import {
  userInfoFormData,
  passwordChangeFormData,
} from './const';
import { withStore } from '../../utils/withStore';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import { ButtonVariants } from '../../components/button/button';
import { AuthService } from '../../services/auth';
import { UserService } from '../../services/user';
import { Routes } from '../../core/routes';

interface IUserProfileProps {
  dispatch: Dispatch<AppState>,
  view?: Views,
  user: Nullable<User>,
}

const userService = new UserService();
const authService = new AuthService();

class Profile extends Block<IUserProfileProps> {
  constructor(props: IUserProfileProps) {
    super({
      ...props,
      view: Views.READ_ONLY,
    });
  }

  componentDidMount(): void {
    const { user } = this.props;

    if (!user) {
      this.props.dispatch(userService.getUser);
    }
  }

  protected getStateFromProps(props: IUserProfileProps) {
    const values: { [key: string]: string } = {};
    const errors: { [key: string]: boolean } = {};
    const userData = props?.user as User;

    (userInfoFormData as IFormData[]).forEach((input: IFormData) => {
      values[input.name] = userData?.[input.name as keyof Omit<User, 'id'>] ?? '';
      errors[input.name] = false;
    });
    (passwordChangeFormData as IFormData[]).forEach((input: IFormData) => {
      values[input.name] = '';
      errors[input.name] = false;
    });

    this.state = {
      values,
      errors,
    };

    this.state = {
      values,
      errors,
      view: Views.READ_ONLY,
      onGoBackClick: this.handleGoBackClick.bind(this),
      updateErrors: this.updateErrors.bind(this),
      onChangeUserInfoClick: this.handleChangeUserInfoBtnClick.bind(this),
      onSubmitUserInfo: this.handleUserInfoSubmit.bind(this),
      onChangePasswordClick: this.handleChangePasswordBtnClick.bind(this),
      onSubmitPassword: this.handlePasswordSubmit.bind(this),
      onAvatarChange: this.handleAvatarChange.bind(this),
      logout: this.handleLogout.bind(this),
    };
  }

  switchView(view: Views) {
    const nextState = {
      view,
    };

    this.setState(nextState);
  }

  handleGoBackClick() {
    switch (this.state.view) {
      case Views.EDIT_USER_INFO:
      case Views.EDIT_USER_PASSWORD:
        this.switchView(Views.READ_ONLY);
        break;
      case Views.READ_ONLY:
      default:
        window.router.go(Routes.Index);
    }
  }

  updateErrors(field: string, newValue: string, isValid = false) {
    const nextState = {
      values: {
        ...this.state.values,
        [field]: newValue,
      },
      errors: {
        ...this.state.errors,
        [field]: !isValid,
      },
    };

    this.setState(nextState);
  }

  handleChangePasswordBtnClick() {
    this.switchView(Views.EDIT_USER_PASSWORD);
    window.router.go(Routes.Profile);
  }

  handleChangeUserInfoBtnClick() {
    this.switchView(Views.EDIT_USER_INFO);
    window.router.go(Routes.Profile);
  }

  handleUserInfoSubmit(values: { [key: string]: string }) {
    this.setState({
      values,
      view: Views.READ_ONLY,
    });

    this.props.dispatch(userService.editProfile, values);
  }

  handlePasswordSubmit(values: { [key: string]: string }) {
    this.setState({
      view: Views.READ_ONLY,
      values: {
        ...this.state.values,
        values,
      },
    });

    this.props.dispatch(userService.changePassword, values);

    const nextState = { ...this.state };
    (passwordChangeFormData as IFormData[]).forEach((input: IFormData) => {
      nextState.values[input.name] = '';
      nextState.errors[input.name] = false;
    });

    this.setState(nextState);
  }

  handleAvatarChange() {
    const formData = new FormData(document.querySelector('form.avatar') as HTMLFormElement);
    this.props.dispatch(userService.changeAvatar, formData);
  }

  handleLogout() {
    this.props.dispatch(authService.logout);
  }

  render() {
    const {
      view,
      values,
      errors,
    } = this.state;

    const avatarImg = this.props.user?.avatar ?? '';

    const userInfoInputs = userInfoFormData.map((input) => ({
      ...input,
      value: values[input.name],
      invalid: errors[input.name],
    }));

    const passwordChangeInputs = passwordChangeFormData.map((input) => ({
      ...input,
      value: values[input.name],
      invalid: errors[input.name],
    }));

    // language=hbs
    return `
      <main data-id="profile">
        <div class='page-wrap profile'>
          {{{ Avatar 
            imageUrl="${avatarImg}"
            onChange=onAvatarChange 
          }}}
          {{#ifEquals ${view} ${Views.EDIT_USER_INFO}}}
            {{{ ProfileForm 
              inputs='${JSON.stringify(userInfoInputs)}'
              onSubmit=onSubmitUserInfo
              updateErrors=updateErrors
            }}}
          {{/ifEquals}}
  
          {{#ifEquals ${view} ${Views.EDIT_USER_PASSWORD}}}
          {{{ ProfileForm 
            inputs='${JSON.stringify(passwordChangeInputs)}'
            onSubmit=onSubmitPassword
            updateErrors=updateErrors
          }}}
          {{/ifEquals}}
  
          {{#ifEquals ${view} ${Views.READ_ONLY}}}
            {{{ ProfileForm 
              inputs='${JSON.stringify(userInfoInputs)}'
              readonly=true
            }}}
            <ul class='profile__actions-buttons'>
              <li class='profile__actions-button-row'>
                {{{ Button 
                    id="change-user-info-button"
                    variant=${ButtonVariants.LINK}
                    label="Изменить данные"
                    onClick=onChangeUserInfoClick
                }}}
              </li>
              <li class='profile__actions-button-row'>
                {{{ Button 
                      id="change-password-button"
                      variant=${ButtonVariants.LINK}
                      label="Изменить пароль"
                      onClick=onChangePasswordClick
                }}}
              </li>
              <li class='profile__actions-button-row'>
                {{{ Link label="Выйти" size="medium" onClick=logout }}}
              </li>
            </ul>
          {{/ifEquals}}
          {{{ GoBackLink onClick=onGoBackClick }}}
          {{{ Navbar }}}
        </div>
      </main>
    `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    user: state.user,
  };
}

export default withStore<IUserProfileProps>(
  Profile,
  mapStateToProps,
);
