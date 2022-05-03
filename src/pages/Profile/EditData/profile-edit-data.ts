import template from './profile-edit-data.hbs';
import * as styles from '../profile.pcss';
import Block from '../../../core/Block';
import { profileEditDataPageData } from './profile-edit-data.data';
import ProfileGoBack from '../components/GoBack';
import ProfileDataFieldEditable from '../components/DataFieldEditable';
import ProfileAvatar from '../components/Avatar';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';
import { withUser } from '../../../utils/withUser';
import { withStore } from '../../../utils/withStore';
import { Store } from '../../../core/Store';
import { Routes } from '../../../core/routes';

class ProfileEditData extends Block {
  constructor(props: {state: Store<AppState>, user: User}) {
    super({ ...props, styles });
  }

  initChildren() {
    // todo - выпилить defaultState
    const formData = {
      email: this.props.user?.email ?? 'defaultEmail',
      login: this.props.user?.login ?? 'defaultLogin',
      firstName: this.props.user?.firstName ?? 'defaultFirstName',
      secondName: this.props.user?.secondName ?? 'defaultSecondName',
      displayName: this.props.user?.displayName ?? 'defaultDisplayName',
      phone: this.props.user?.phone ?? 'defaultPhone',
    };
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldEmail = new ProfileDataFieldEditable(
      {
        id: 'email',
        category: 'Почта',
        type: 'email',
        placeholder: formData.email,
        events: {
          change: (e) => formData.email = e.target.value,
        },
      },
    );
    this.children.dataFieldLogin = new ProfileDataFieldEditable(
      {
        id: 'login',
        category: 'Логин',
        type: 'text',
        placeholder: formData.login,
        events: {
          change: (e) => formData.login = e.target.value,
        },
      },
    );
    this.children.dataFieldFirstName = new ProfileDataFieldEditable(
      {
        id: 'first_name',
        category: 'Имя',
        type: 'text',
        placeholder: formData.firstName,
        events: {
          change: (e) => formData.firstName = e.target.value,
        },
      },
    );
    this.children.dataFieldSecondName = new ProfileDataFieldEditable(
      {
        id: 'second_name',
        category: 'Фамилия',
        type: 'text',
        placeholder: formData.secondName,
        events: {
          change: (e) => formData.secondName = e.target.value,
        },
      },
    );
    this.children.dataFieldDisplayName = new ProfileDataFieldEditable(
      {
        id: 'display_name',
        category: 'Имя в чате',
        type: 'text',
        placeholder: formData.displayName,
        events: {
          change: (e) => formData.displayName = e.target.value,
        },
      },
    );
    this.children.dataFieldPhone = new ProfileDataFieldEditable(
      {
        id: 'phone',
        category: 'Телефон',
        type: 'tel',
        placeholder: formData.phone,
        events: {
          change: (e) => formData.phone = e.target.value,
        },
      },
    );

    this.children.submitButton = new Button({
      ...profileEditDataPageData.submitButton,
      events: {
        click: () => console.log(formData),
      },
    });

    this.children.goBack = new ProfileGoBack({ path: Routes.Profile });
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withStore(withUser(ProfileEditData));
