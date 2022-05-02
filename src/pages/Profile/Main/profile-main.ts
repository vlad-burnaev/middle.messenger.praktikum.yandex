import template from './profile-main.hbs';
import * as styles from '../profile.pcss';
import Block from '../../../core/Block';
import { profileMainData } from './profile-main.data';
import ProfileDataField from '../components/DataField';
import ProfileActionButton from '../components/ActionButton';
import ProfileGoBack from '../components/GoBack';
import ProfileAvatar from '../components/Avatar';
import Navbar from '../../../components/Navbar';
import { AuthService } from '../../../services/auth';
import { withStore } from '../../../utils/withStore';
import { Store } from '../../../core/Store';

const authService = new AuthService();

class ProfileMain extends Block {
  constructor(props: {store: Store<AppState>}) {
    super({ ...props, styles });
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
    this.children.actionButtonExit2 = new ProfileActionButton({
      label: 'Выйти',
      events: {
        click: () => {
          this.props.store.dispatch(authService.logout);
        },
      },
    });

    this.children.goBack = new ProfileGoBack(profileMainData.goBack);

    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withStore(ProfileMain);
