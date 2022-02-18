import {profileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {button} from "../../../components/Button/ButtonTemplate";
import {ProfileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

Handlebars.registerPartial({ profileAvatar, profileDataFieldEditable, button, profileGoBack });

const ProfileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container.innerHTML = ProfileChangePasswordPage(ProfileChangePasswordPageData);