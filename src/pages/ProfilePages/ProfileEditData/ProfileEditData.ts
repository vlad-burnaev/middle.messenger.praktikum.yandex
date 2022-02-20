import {profileEditDataPageTemplate} from "./ProfileEditData.template";
import {profileEditDataPageData} from "./ProfileEditData.data";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileEditData');

const ProfileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container.innerHTML = ProfileEditDataPage(profileEditDataPageData);