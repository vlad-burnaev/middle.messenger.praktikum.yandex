import {ProfileAvatarTemplate} from "../components/ProfileAvatar/ProfileAvatar.template";
import {ProfileDataFieldTemplate} from "../components/ProfileDataField/ProfileDataField.template";
import {ProfileActionButtonTemplate} from "../components/ProfileActionButton/ProfileActionButton.template";
import {ProfilePageTemplate} from "./Profile.template";
import {ProfilePageData} from "./Profile.data";
import {ProfileGoBackTemplate} from "../components/ProfileGoBack/ProfileGoBack.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.ProfilePage');

const ProfileAvatar = Handlebars.compile(ProfileAvatarTemplate);
const ProfileDataField = Handlebars.compile(ProfileDataFieldTemplate);
const ProfileActionButton = Handlebars.compile(ProfileActionButtonTemplate);
const ProfileGoBack = Handlebars.compile(ProfileGoBackTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataField, ProfileActionButton, ProfileGoBack });

const ProfilePage = Handlebars.compile(ProfilePageTemplate);

container.innerHTML = ProfilePage(ProfilePageData);