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
import { withUser } from '../../../utils/withUser';

const authService = new AuthService();

class ProfileMain extends Block {
  constructor(props: {store: Store<AppState>, user: User}) {
    super({ ...props, styles });
  }

  // todo - выпилить defaultState
  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldEmail = new ProfileDataField({
      category: 'Почта',
      data: this.props.user?.email ?? 'defaultEmail',
    });
    this.children.dataFieldLogin = new ProfileDataField({
      category: 'Логин',
      data: this.props.user?.login ?? 'defaultLogin',
    });
    this.children.dataFieldFirstName = new ProfileDataField({
      category: 'Имя',
      data: this.props.user?.firstName ?? 'defaultFirstName',
    });
    this.children.dataFieldSecondName = new ProfileDataField({
      category: 'Фамилия',
      data: this.props.user?.secondName ?? 'defaultSecondName',
    });
    this.children.dataFieldChatName = new ProfileDataField({
      category: 'Имя в чате',
      data: this.props.user?.displayName ?? 'defaultDisplayName',
    });
    this.children.dataFieldPhone = new ProfileDataField({
      category: 'Телефон',
      data: this.props.user?.phone ?? 'defaultPhone',
    });

    this.children.actionButtonEditData = new ProfileActionButton(profileMainData.actions[0]);
    this.children.actionButtonChangePassword = new ProfileActionButton(profileMainData.actions[1]);
    this.children.actionButtonExit = new ProfileActionButton({
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

export default withStore(withUser(ProfileMain));
