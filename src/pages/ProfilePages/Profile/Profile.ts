import {profileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileDataField} from "../components/ProfileDataField/ProfileDataFieldTemplate";
import {profileActionButton} from "../components/ProfileActionButton/ProfileActionButtonTemplate";
import {profilePageTemplate} from "./Profile.template";
import {profilePageData} from "./Profile.data";
import {profileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfilePage');

Handlebars.registerPartial({ profileAvatar, profileDataField, profileActionButton, profileGoBack });

const profilePage = Handlebars.compile(profilePageTemplate);

container.innerHTML = profilePage(profilePageData);