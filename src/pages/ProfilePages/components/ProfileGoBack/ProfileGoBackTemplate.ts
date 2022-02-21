import Handlebars from "handlebars";
import {ArrowLeftIcon} from "../../../../../static/icons/arrowLeftIcon";

const profileGoBackTemplate = `
    <a href={{href}} class="go_back_block">
        <div class="go_back_button">
            ${ArrowLeftIcon}
        </div>
    </a>
`

export const ProfileGoBack = Handlebars.compile(profileGoBackTemplate);
