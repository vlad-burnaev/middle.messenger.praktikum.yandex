import template from './profile-change-password.hbs';
import * as styles from '../profile.pcss';
import Block from '../../../utils/Block';
import { profileChangePasswordPageData } from './profile-change-password.data';
import ProfileGoBack from '../components/GoBack';
import ProfileDataFieldEditable from '../components/DataFieldEditable';
import ProfileAvatar from '../components/Avatar';
import Button from '../../../components/Button';

export class ProfileChangePassword extends Block {
  constructor() {
    super({ styles });
  }

  private formData = {
    old_password: '',
    new_password: '',
  }

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldOldPassword = new ProfileDataFieldEditable({
      ...profileChangePasswordPageData.data.old_password,
      events: {
        change: (e) => this.formData.old_password = e.target.value,
      },
    });
    this.children.dataFieldNewPassword = new ProfileDataFieldEditable({
      ...profileChangePasswordPageData.data.new_password,
      events: {
        change: (e) => this.formData.new_password = e.target.value,
      },
    });
    this.children.dataFieldNewPasswordRepeat = new ProfileDataFieldEditable({
      ...profileChangePasswordPageData.data.new_password_2,
      events: {
        change: (e) => this.formData.new_password = e.target.value,
      },
    });

    this.children.submitButton = new Button({
      ...profileChangePasswordPageData.submitButton,
      events: {
        click: () => console.log(this.formData),
      },
    });

    this.children.goBack = new ProfileGoBack(profileChangePasswordPageData.goBack);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
