import Block from '../../../../core/Block';
import './chat-preview.scss';

type Meta = {
  time: string,
  newMessagesCount?: number
}

export interface IChatPreviewProps {
  avatarSrc: string,
  name: string,
  lastMessage: {
    text: string,
    prefix?: string
  },
  meta: Meta
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
            <div class="text-block__name">{{name}}</div>
            <div class="text-block__last-message last-message">
                <span class="last-message__prefix">{{lastMessage.prefix}}</span>
                {{lastMessage.text}}
            </div>
        </div>
        <div class="meta">
            <time class="meta__time">
                {{meta.time}}
            </time>
            {{#if meta.newMessagesCount}}
                <div class="meta__new-messages-count">
                    {{meta.newMessagesCount}}
                </div>
            {{/if}}
        </div>
      </li>
    `;
  }
}

export default ChatPreview;
