import {profilePageTemplate} from "./Profile.template";
import {profilePageData} from "./Profile.data";
import Handlebars from "handlebars";
import {ProfileActionButton} from "../components/ProfileActionButton/ProfileActionButtonTemplate";
import {ProfileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {ProfileDataField} from "../components/ProfileDataField/ProfileDataFieldTemplate";
import {ProfileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {ProfileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";

const container = document.querySelector('.ProfilePage');

Handlebars.registerPartial({ ProfileActionButton, ProfileAvatar, ProfileDataField, ProfileDataFieldEditable, ProfileGoBack });
const ProfilePage = Handlebars.compile(profilePageTemplate);

container.innerHTML = ProfilePage(profilePageData);