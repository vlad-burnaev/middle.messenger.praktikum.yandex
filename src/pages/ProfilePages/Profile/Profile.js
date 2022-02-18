import {profileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileDataFieldTemplate} from "../components/ProfileDataField/ProfileDataFieldTemplate";
import {profileActionButtonTemplate} from "../components/ProfileActionButton/ProfileActionButtonTemplate";
import {profilePageTemplate} from "./Profile.template";
import {ProfilePageData} from "./Profile.data";
import {profileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfilePage');

const ProfileAvatar = Handlebars.compile(profileAvatarTemplate);
const ProfileDataField = Handlebars.compile(profileDataFieldTemplate);
const ProfileActionButton = Handlebars.compile(profileActionButtonTemplate);
const ProfileGoBack = Handlebars.compile(profileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataField, ProfileActionButton, ProfileGoBack });

const ProfilePage = Handlebars.compile(profilePageTemplate);

container.innerHTML = ProfilePage(ProfilePageData);