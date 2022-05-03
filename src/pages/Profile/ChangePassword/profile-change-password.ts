import template from './profile-change-password.hbs';
import * as styles from '../profile.pcss';
import Block from '../../../core/Block';
import ProfileGoBack from '../components/GoBack';
import ProfileDataFieldEditable from '../components/DataFieldEditable';
import ProfileAvatar from '../components/Avatar';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';
import { Routes } from '../../../core/routes';
import { UserService } from '../../../services/user';
import { Store } from '../../../core/Store';
import { withStore } from '../../../utils/withStore';

const userService = new UserService();

class ProfileChangePassword extends Block {
  constructor(props: {store: Store<AppState>}) {
    super({ ...props, styles });
  }

  private formData = {
    oldPassword: '',
    newPassword: '',
  }

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    // todo - добавить валидацию
    // todo - обработать ошибки
    this.children.dataFieldOldPassword = new ProfileDataFieldEditable({
      id: 'old_password',
      category: 'Старый пароль',
      type: 'password',
      placeholder: '•••••••••',
      events: {
        change: (e) => this.formData.oldPassword = e.target.value,
      },
    });
    this.children.dataFieldNewPassword = new ProfileDataFieldEditable({
      id: 'new_password',
      category: 'Новый пароль',
      type: 'password',
      placeholder: '•••••••••••',
      events: {
        change: (e) => this.formData.newPassword = e.target.value,
      },
    });
    this.children.dataFieldNewPasswordRepeat = new ProfileDataFieldEditable({
      id: 'new_password_2',
      category: 'Повторите новый пароль',
      type: 'password',
      placeholder: '•••••••••••',
      events: {
        change: (e) => this.formData.newPassword = e.target.value,
      },
    });

    this.children.submitButton = new Button({
      label: 'Сохранить',
      events: {
        click: () => {
          this.props.store.dispatch(userService.changePassword, this.formData);
        },
      },
    });

    this.children.goBack = new ProfileGoBack({ path: Routes.Profile });
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withStore(ProfileChangePassword);
