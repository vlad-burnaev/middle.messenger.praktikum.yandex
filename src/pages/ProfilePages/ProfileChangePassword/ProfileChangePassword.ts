import {profileChangePasswordPageTemplate} from "./ProfileChangePassword.template";
import {profileChangePasswordPageData} from "./ProfileChangePassword.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileChangePasswordPage');

const ProfileChangePasswordPage = Handlebars.compile(profileChangePasswordPageTemplate);

container.innerHTML = ProfileChangePasswordPage(profileChangePasswordPageData);