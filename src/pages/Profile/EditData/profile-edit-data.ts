import template from './profile-edit-data.hbs';
import * as styles from '../profile.pcss';
import Block from '../../../core/Block';
import { profileEditDataPageData } from './profile-edit-data.data';
import ProfileGoBack from '../components/GoBack';
import ProfileDataFieldEditable from '../components/DataFieldEditable';
import ProfileAvatar from '../components/Avatar';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';

export class ProfileEditData extends Block {
  constructor() {
    super({ styles });
  }

  private formData = {
    email: profileEditDataPageData.data.email.placeholder,
    login: profileEditDataPageData.data.login.placeholder,
    first_name: profileEditDataPageData.data.first_name.placeholder,
    second_name: profileEditDataPageData.data.second_name.placeholder,
    display_name: profileEditDataPageData.data.display_name.placeholder,
    phone: profileEditDataPageData.data.phone.placeholder,
  }

  initChildren() {
    this.children.avatar = new ProfileAvatar();

    this.children.dataFieldEmail = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.email,
        events: {
          change: (e) => this.formData.email = e.target.value,
        },
      },
    );
    this.children.dataFieldLogin = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.login,
        events: {
          change: (e) => this.formData.login = e.target.value,
        },
      },
    );
    this.children.dataFieldFirstName = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.first_name,
        events: {
          change: (e) => this.formData.first_name = e.target.value,
        },
      },
    );
    this.children.dataFieldSecondName = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.second_name,
        events: {
          change: (e) => this.formData.second_name = e.target.value,
        },
      },
    );
    this.children.dataFieldDisplayName = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.display_name,
        events: {
          change: (e) => this.formData.display_name = e.target.value,
        },
      },
    );
    this.children.dataFieldPhone = new ProfileDataFieldEditable(
      {
        ...profileEditDataPageData.data.phone,
        events: {
          change: (e) => this.formData.phone = e.target.value,
        },
      },
    );

    this.children.submitButton = new Button({
      ...profileEditDataPageData.submitButton,
      events: {
        click: () => console.log(this.formData),
      },
    });

    this.children.goBack = new ProfileGoBack(profileEditDataPageData.goBack);
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
