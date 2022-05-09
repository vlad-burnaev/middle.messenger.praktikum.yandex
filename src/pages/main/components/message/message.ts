import Block from '../../../../core/Block';
import './message.scss';
import { IconName } from '../../../../components/icon/icon';

enum MessageStatus {
  Sent = 'sent',
  Delivered = 'delivered'
}

export interface IMessageProps {
  text: string,
  meta: {
    status: MessageStatus,
    time: string
  }
}

class Message extends Block<IMessageProps> {
  constructor(props: IMessageProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <li class="message">
        <span class="message__text">{{text}}</span>
        <div class="message-meta">
            {{#if ${this.props.meta.status === MessageStatus.Sent} }}
                {{{ Icon name=${IconName.Checkmark} }}}
            {{/if}}
            <span class="message-meta__text">{{meta.time}}</span>
        </div>
      </li>
    `;
  }
}

export default Message;
