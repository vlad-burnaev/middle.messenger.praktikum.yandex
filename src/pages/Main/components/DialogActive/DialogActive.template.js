import {ClipIcon} from "/static/icons/clipIcon";
import {ArrowRight2Icon} from "/static/icons/arrowRight2Icon";
import {MenuIcon} from "/static/icons/MenuIcon";

export const DialogActiveTemplate = `
    <article class="dialogActive">
        <section class="dialogHeader">
            <div class="dialogHeaderLeftBlock">
                <div class="dialogHeaderAvatar"></div>
                <div class="dialogHeaderName">{{data.name}}</div>
            </div>
            <div class="dialogHeaderRightBlock">
                ${MenuIcon}
            </div>
        </section>
        <ul class="dialogMain">
            {{#data.messageGroups}}
                {{> MessageGroup }}
            {{/data.messageGroups}}
        </ul>
        <section class="dialogFooter">
            <button class="dialogAttach">
                ${ClipIcon}
            </button>
            <input type="text" placeholder="Сообщение" class="dialogInput">
            <button class="dialogEnterButton">
                ${ArrowRight2Icon}
            </button>
        </section>
    </article>
`