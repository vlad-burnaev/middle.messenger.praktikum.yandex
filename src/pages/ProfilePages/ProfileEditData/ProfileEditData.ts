import {profileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {profileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {profileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileEditDataPageTemplate} from "./ProfileEditData.template";
import {profileEditDataPageData} from "./ProfileEditData.data";
import {Button} from "../../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileEditData');

Handlebars.registerPartial({ profileAvatar, profileDataFieldEditable, button: Button, profileGoBack });

const profileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container.innerHTML = profileEditDataPage(profileEditDataPageData);