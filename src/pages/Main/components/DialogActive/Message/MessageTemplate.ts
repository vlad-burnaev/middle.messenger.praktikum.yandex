import Handlebars from 'handlebars';
import { CheckMarkIcon } from '../../../../../../static/icons/checkMarkIcon';

Handlebars.registerHelper('isSent', (value) => value === 'sent');

const messageTemplate = `
    <li class="message">
        <span class="messageText">{{text}}</span>
        <div class="messageMeta">
            {{#if (isSent meta.status)}}
                ${CheckMarkIcon}
            {{/if}}
            <span class="messageMetaText">{{meta.time}}</span>
        </div>
    </li>
`;

export const Message = Handlebars.compile(messageTemplate);
