import { ArrowRight1Icon } from '../../../static/icons/arrowRight1Icon';

export const mainPageTemplate = `
    <article class="chatsBlock">
        <nav class="chatsBlockHeader">
            <a href="/src/pages/ProfilePages_deprecated/Profile/Profile.html" class="settingsLink">
                Профиль
                <div class="settingsLinkIcon">
                    ${ArrowRight1Icon}
                </div>
            </a>
            <input type="text" class="search" placeholder="Поиск">
        </nav>
        <ul class="chatsBlockChats">
            {{#chats}}
                {{> Chat }}
            {{/chats}}
        </ul>
    </article>
    <div class="dialog">
        {{> DialogActive dialog }}
<!--            <div class="dialogUnselected">-->
<!--                Выберите чат чтобы отправить сообщение-->
<!--            </div>-->
    </div>
`;
