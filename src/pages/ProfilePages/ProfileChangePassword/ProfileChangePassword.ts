import Handlebars from 'handlebars';
import { profileChangePasswordPageTemplate } from './ProfileChangePassword.template';
import { profileChangePasswordPageData } from './ProfileChangePassword.data';
import { ProfileAvatar } from '../components/ProfileAvatar/ProfileAvatarTemplate';
import { ProfileDataFieldEditable } from '../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate';
import { Button } from '../../../components/Button/ButtonTemplate';
import { ProfileGoBack } from '../components/ProfileGoBack/ProfileGoBackTemplate';

const container = document.querySelector('.ProfileChangePasswordPage');

Handlebars.registerPartial({
  ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack,
});
const ProfileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container!.innerHTML = ProfileChangePasswordPage(profileChangePasswordPageData);
