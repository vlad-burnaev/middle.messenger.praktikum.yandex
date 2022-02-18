import {imageIcon} from '/static/icons/imageIcon';
import Handlebars from "handlebars";

export const profileAvatarTemplate = `
    <div class="avatar">
        ${imageIcon}
        <div class="avatarOverlay">
            <div class="avatarOverlayText">
                Поменять аватар
            </div>
        </div>
    </div>
`

export const profileAvatar = Handlebars.compile(profileAvatarTemplate);