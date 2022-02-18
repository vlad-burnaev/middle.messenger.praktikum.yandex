import Handlebars from "handlebars";

export const chatTemplate = `
    <li class="chat">
        <div class="chatAvatar"></div>
        <div class="chatTextBlock">
            <div class="chatTextBlockName">{{name}}</div>
            <div class="chatTextBlockLastMessage">
                <span class="chatTextBlockLastMessagePrefix">{{lastMessage.prefix}}</span>
                {{lastMessage.text}}
            </div>
        </div>
        <div class="chatMeta">
            <div class="chatMetaTime">
                {{meta.time}}
            </div>
            {{#if meta.newMessagesCount}}
                <div class="chatMetaNewMessagesCount">
                    {{meta.newMessagesCount}}
                </div>
            {{/if}}
        </div>
    </li>
`

export const chat = Handlebars.compile(chatTemplate);