import Block from '../../../../core/Block';
import './chat-preview.scss';
import classnames from '../../../../helpers/classnames';

type LastMessage = {
  text: string,
  time: string,
  newMessagesCount?: number
  prefix?: string
}

export interface IChatPreviewProps {
  id: number,
  isActive: boolean,
  avatarSrc: string,
  title: string,
  lastMessage: Nullable<LastMessage>,
  onClick: (chatId: number) => void;
}

interface IChatPreviewPropsWithEvents extends Omit<IChatPreviewProps, 'onClick'> {
  events: {
    click: (chatId: number) => void;
  }
}

class ChatPreview extends Block<IChatPreviewPropsWithEvents> {
  constructor(props: IChatPreviewProps) {
    const {
      id, isActive, avatarSrc, title, lastMessage, onClick,
    } = props;
    super({
      id,
      isActive,
      avatarSrc,
      title,
      lastMessage,
      events: {
        click: () => {
          onClick(id);
        },
      },
    });
  }

  render() {
    const className = classnames('chat-preview', {
      'chat-preview_active': this.props.isActive,
    });
    // todo - переделать li на button (семантика)
    // language=hbs
    return `
      <li class="${className}">
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
