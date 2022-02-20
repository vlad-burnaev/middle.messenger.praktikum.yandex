import Handlebars from "handlebars";
import {imageIcon} from "../../../../../static/icons/imageIcon";

const profileAvatarTemplate = `
    <div class="avatar">
        ${imageIcon}
        <div class="avatar_overlay">
            <div class="avatar_overlay_text">
                Поменять аватар
            </div>
        </div>
    </div>
`

export const profileAvatar = Handlebars.compile(profileAvatarTemplate);