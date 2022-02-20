import {profileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {Button} from "../../../components/Button/ButtonTemplate";
import {profileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

Handlebars.registerPartial({ profileAvatar, profileDataFieldEditable, button: Button, profileGoBack });

const profileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container.innerHTML = profileChangePasswordPage(profileChangePasswordPageData);