import Block from '../../../../core/Block';
import './chat-preview.scss';

type LastMessage = {
  text: string,
  time: string,
  newMessagesCount?: number
  prefix?: string
}

export interface IChatPreviewProps {
  avatarSrc: string,
  title: string,
  lastMessage: Nullable<LastMessage>,
}

class ChatPreview extends Block<IChatPreviewProps> {
  constructor(props: IChatPreviewProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <li class="chat-preview">
        <div class="chat-preview__avatar">
            <img src={{avatarSrc}}>
        </div>
        <div class="text-block">
            <div class="text-block__name">{{title}}</div>
            {{#if lastMessage}}
                <div class="text-block__last-message last-message">
                    {{#if lastMessage.prefix}}
                        <span class="last-message__prefix">{{lastMessage.prefix}}</span>
                    {{/if}}
                    {{lastMessage.text}}
                </div>
            {{/if}}
        </div>
        {{#if lastMessage}}
            <div class="meta">
                <time class="meta__time">
                    {{lastMessage.time}}
                </time>
                {{#if lastMessage.newMessagesCount}}
                    <div class="meta__new-messages-count">
                        {{lastMessage.newMessagesCount}}
                    </div>
                {{/if}}
            </div>
        {{/if}}
      </li>
    `;
  }
}

export default ChatPreview;
