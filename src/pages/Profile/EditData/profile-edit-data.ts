import template from './profile-edit-data.hbs';
import styles from '../profile.pcss';
import Block from '../../../utils/Block';
import { profileEditDataPageData } from './profile-edit-data.data';
import ProfileGoBack from '../components/GoBack';
import ProfileDataFieldEditable from '../components/DataFieldEditable';
import ProfileAvatar from '../components/Avatar';
import Button from '../../../components/Button';

export class ProfileEditData extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldEmail = new ProfileDataFieldEditable(profileEditDataPageData.data[0]);
    this.children.dataFieldLogin = new ProfileDataFieldEditable(profileEditDataPageData.data[1]);
    this.children.dataFieldFirstName = new ProfileDataFieldEditable(profileEditDataPageData.data[2]);
    this.children.dataFieldSecondName = new ProfileDataFieldEditable(profileEditDataPageData.data[3]);
    this.children.dataFieldChatName = new ProfileDataFieldEditable(profileEditDataPageData.data[4]);
    this.children.dataFieldPhone = new ProfileDataFieldEditable(profileEditDataPageData.data[5]);

    this.children.submitButton = new Button(profileEditDataPageData.submitButton);

    this.children.goBack = new ProfileGoBack(profileEditDataPageData.goBack);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
