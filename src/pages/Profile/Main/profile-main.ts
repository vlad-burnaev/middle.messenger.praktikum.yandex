import template from './profile-main.hbs';
import styles from '../profile.pcss';
import Block from '../../../utils/Block';
import { profileMainData } from './profile-main.data';
import ProfileDataField from '../components/DataField';
import ProfileActionButton from '../components/ActionButton';
import ProfileGoBack from '../components/GoBack';
import ProfileAvatar from '../components/Avatar';

export class ProfileMain extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldEmail = new ProfileDataField(profileMainData.data[0]);
    this.children.dataFieldLogin = new ProfileDataField(profileMainData.data[1]);
    this.children.dataFieldFirstName = new ProfileDataField(profileMainData.data[2]);
    this.children.dataFieldSecondName = new ProfileDataField(profileMainData.data[3]);
    this.children.dataFieldChatName = new ProfileDataField(profileMainData.data[4]);
    this.children.dataFieldPhone = new ProfileDataField(profileMainData.data[5]);

    this.children.actionButtonEditData = new ProfileActionButton(profileMainData.actions[0]);
    this.children.actionButtonChangePassword = new ProfileActionButton(profileMainData.actions[1]);
    this.children.actionButtonExit = new ProfileActionButton(profileMainData.actions[2]);

    this.children.goBack = new ProfileGoBack(profileMainData.goBack);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
