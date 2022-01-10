import {ProfileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatar.template";
import {ProfileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBack.template";
import {ProfileDataFieldEditableTemplate} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditable.template";
import {ProfileEditDataPageTemplate} from "./ProfileEditData.template";
import {ProfileEditDataPageData} from "./ProfileEditData.data";
import {ButtonTemplate} from "../../../components/Button/Button.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.ProfileEditData');

const ProfileAvatar = Handlebars.compile(ProfileAvatarTemplate);
const ProfileDataFieldEditable = Handlebars.compile(ProfileDataFieldEditableTemplate);
const Button = Handlebars.compile(ButtonTemplate);
const ProfileGoBack = Handlebars.compile(ProfileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataFieldEditable, Button, ProfileGoBack });

const ProfileEditDataPage = Handlebars.compile(ProfileEditDataPageTemplate);

container.innerHTML = ProfileEditDataPage(ProfileEditDataPageData);