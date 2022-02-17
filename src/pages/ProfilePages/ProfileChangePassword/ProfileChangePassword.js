import {ProfileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatar.template";
import {ProfileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBack.template";
import {ProfileDataFieldEditableTemplate} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditable.template";
import {ProfileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {ButtonTemplate} from "../../../components/Button/Button.template";
import {ProfileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

const ProfileAvatar = Handlebars.compile(ProfileAvatarTemplate);
const ProfileDataFieldEditable = Handlebars.compile(ProfileDataFieldEditableTemplate);
const Button = Handlebars.compile(ButtonTemplate);
const ProfileGoBack = Handlebars.compile(ProfileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack });

const ProfileChangePasswordPage = Handlebars.compile(ProfileChangePasswordPageTemplate);

container.innerHTML = ProfileChangePasswordPage(ProfileChangePasswordPageData);