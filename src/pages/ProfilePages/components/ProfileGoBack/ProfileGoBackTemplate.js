import {ArrowLeftIcon} from "/static/icons/arrowLeftIcon";
import Handlebars from "handlebars";

export const profileGoBackTemplate = `
    <a href={{href}} class="goBack">
        <div class="goBackButton">
            ${ArrowLeftIcon}
        </div>
    </a>
`

export const profileGoBack = Handlebars.compile(profileGoBackTemplate);