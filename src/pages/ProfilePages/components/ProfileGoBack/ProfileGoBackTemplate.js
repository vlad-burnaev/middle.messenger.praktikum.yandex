import {ArrowLeftIcon} from "/static/icons/arrowLeftIcon";
import Handlebars from "handlebars";

export const profileGoBackTemplate = `
    <a href={{href}} class="go_back_block">
        <div class="go_back_button">
            ${ArrowLeftIcon}
        </div>
    </a>
`

export const profileGoBack = Handlebars.compile(profileGoBackTemplate);