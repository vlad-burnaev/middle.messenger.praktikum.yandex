import {profileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditableTemplate} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {buttonTemplate} from "../../../components/Button/ButtonTemplate";
import {ProfileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

const ProfileAvatar = Handlebars.compile(profileAvatarTemplate);
const ProfileDataFieldEditable = Handlebars.compile(profileDataFieldEditableTemplate);
const Button = Handlebars.compile(buttonTemplate);
const ProfileGoBack = Handlebars.compile(profileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack });

const ProfileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container.innerHTML = ProfileChangePasswordPage(ProfileChangePasswordPageData);