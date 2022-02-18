import {imageIcon} from '/static/icons/imageIcon';
import Handlebars from "handlebars";

export const profileAvatarTemplate = `
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