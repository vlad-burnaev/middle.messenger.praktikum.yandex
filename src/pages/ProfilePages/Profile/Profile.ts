import {profilePageTemplate} from "./Profile.template";
import {profilePageData} from "./Profile.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfilePage');

const ProfilePage = Handlebars.compile(profilePageTemplate);

container.innerHTML = ProfilePage(profilePageData);