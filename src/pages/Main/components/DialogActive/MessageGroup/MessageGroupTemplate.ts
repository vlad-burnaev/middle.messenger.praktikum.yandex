import Handlebars from 'handlebars';

Handlebars.registerHelper('isMyMessages', (value) => value === 'my');

Handlebars.registerHelper('isCompanionMessages', (value) => value === 'companion');

const messageGroupTemplate = `
    {{#if (isMyMessages type) }}
        <li>
            <ul class="messageGroup myMessages">
                <div class="messageGroupDate">{{date}}</div>
                {{#messages}}
                    {{> Message }}
                {{/messages}}
            </ul>
        </li>
    {{/if}}
    {{#if (isCompanionMessages type) }}
        <li>
            <ul class="messageGroup companionMessages">
                <div class="messageGroupDate">{{date}}</div>
                {{#messages}}
                    {{> Message }}
                {{/messages}}
            </ul>
        </li>
    {{/if}}
`;

export const MessageGroup = Handlebars.compile(messageGroupTemplate);
