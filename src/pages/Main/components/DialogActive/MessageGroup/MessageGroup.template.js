const Handlebars = require("handlebars");

Handlebars.registerHelper('isMyMessages', function (value) {
    return value === 'my';
});

Handlebars.registerHelper('isCompanionMessages', function (value) {
    return value === 'companion';
});

export const MessageGroupTemplate = `
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
`