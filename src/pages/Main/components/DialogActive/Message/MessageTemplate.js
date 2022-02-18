import {CheckMarkIcon} from "/static/icons/checkMarkIcon";
import Handlebars from "handlebars";

Handlebars.registerHelper('isSent', function (value) {
    return value === 'sent';
});

export const messageTemplate = `
    <li class="message">
        <span class="messageText">{{text}}</span>
        <div class="messageMeta">
            {{#if (isSent meta.status)}}
                ${CheckMarkIcon}
            {{/if}}
            <span class="messageMetaText">{{meta.time}}</span>
        </div>
    </li>
`

export const message = Handlebars.compile(messageTemplate);