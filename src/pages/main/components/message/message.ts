import Block from '../../../../core/Block';
import './message.scss';

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
        <div class="meta">
            {{#if ${this.props.meta.status === MessageStatus.Sent} }}
                {{{ Checkmark }}}
            {{/if}}
            <span class="meta__text">{{meta.time}}</span>
        </div>
      </li>
    `;
  }
}

export default Message;
