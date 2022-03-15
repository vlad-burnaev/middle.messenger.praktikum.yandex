import template from './profile-change-password.hbs';
import styles from '../profile.pcss';
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

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldOldPassword = new ProfileDataFieldEditable(profileChangePasswordPageData.data[0]);
    this.children.dataFieldNewPassword = new ProfileDataFieldEditable(profileChangePasswordPageData.data[1]);
    this.children.dataFieldNewPasswordRepeat = new ProfileDataFieldEditable(profileChangePasswordPageData.data[2]);

    this.children.submitButton = new Button(profileChangePasswordPageData.submitButton);

    this.children.goBack = new ProfileGoBack(profileChangePasswordPageData.goBack);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
