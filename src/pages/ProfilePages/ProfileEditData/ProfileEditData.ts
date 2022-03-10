import Handlebars from 'handlebars';
import { profileEditDataPageTemplate } from './ProfileEditData.template';
import { profileEditDataPageData } from './ProfileEditData.data';
import { ProfileAvatar } from '../components/ProfileAvatar/ProfileAvatarTemplate';
import { ProfileDataFieldEditable } from '../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate';
import { Button } from '../../../components/Button/ButtonTemplate';
import { ProfileGoBack } from '../components/ProfileGoBack/ProfileGoBackTemplate';

const container = document.querySelector('.ProfileEditData');

Handlebars.registerPartial({
  ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack,
});
const ProfileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container!.innerHTML = ProfileEditDataPage(profileEditDataPageData);
