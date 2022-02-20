import {ProfileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {ProfileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {ProfileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {Button} from "../../../components/Button/ButtonTemplate";
import {profileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

Handlebars.registerPartial({ profileAvatar: ProfileAvatar, profileDataFieldEditable: ProfileDataFieldEditable, button: Button, profileGoBack: ProfileGoBack });

const profileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container.innerHTML = profileChangePasswordPage(profileChangePasswordPageData);