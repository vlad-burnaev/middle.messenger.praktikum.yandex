import {profileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileEditDataPageTemplate} from "./ProfileEditData.template";
import {ProfileEditDataPageData} from "./ProfileEditData.data";
import {button} from "../../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileEditData');

Handlebars.registerPartial({ profileAvatar, profileDataFieldEditable, button, profileGoBack });

const ProfileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container.innerHTML = ProfileEditDataPage(ProfileEditDataPageData);