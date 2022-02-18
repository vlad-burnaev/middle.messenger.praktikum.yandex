import {profileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditableTemplate} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileEditDataPageTemplate} from "./ProfileEditData.template";
import {ProfileEditDataPageData} from "./ProfileEditData.data";
import {buttonTemplate} from "../../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileEditData');

const ProfileAvatar = Handlebars.compile(profileAvatarTemplate);
const ProfileDataFieldEditable = Handlebars.compile(profileDataFieldEditableTemplate);
const Button = Handlebars.compile(buttonTemplate);
const ProfileGoBack = Handlebars.compile(profileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack });

const ProfileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container.innerHTML = ProfileEditDataPage(ProfileEditDataPageData);