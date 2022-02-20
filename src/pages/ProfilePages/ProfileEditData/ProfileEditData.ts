import {ProfileAvatar} from "../components/ProfileAvatar/ProfileAvatarTemplate";
import {ProfileGoBack} from "../components/ProfileGoBack/ProfileGoBackTemplate";
import {ProfileDataFieldEditable} from "../components/ProfileDataFieldEditable/ProfileDataFieldEditableTemplate";
import {profileEditDataPageTemplate} from "./ProfileEditData.template";
import {profileEditDataPageData} from "./ProfileEditData.data";
import {Button} from "../../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.ProfileEditData');

Handlebars.registerPartial({ profileAvatar: ProfileAvatar, profileDataFieldEditable: ProfileDataFieldEditable, button: Button, profileGoBack: ProfileGoBack });

const profileEditDataPage = Handlebars.compile(profileEditDataPageTemplate);

container.innerHTML = profileEditDataPage(profileEditDataPageData);