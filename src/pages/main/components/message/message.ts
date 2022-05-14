import Block from '../../../../core/Block';
import './message.scss';
import { IconName } from '../../../../components/icon/icon';
import { getTime } from '../../../../utils/date-formatter';

export interface IMessageProps {
  text: string,
  isRead: boolean,
  date: Date
}

class Message extends Block<IMessageProps> {
  constructor(props: IMessageProps) {
    super({ ...props, date: new Date(props.date) });
  }

  render() {
    const { date, isRead, text } = this.props;

    // language=hbs
    return `
      <li class="message">
        <span class="message__text">${text}</span>
        <div class="message-meta">
            {{#if ${isRead} }}
                {{{ Icon name=${IconName.Checkmark} }}}
            {{/if}}
            <span class="message-meta__text">${getTime(date)}</span>
        </div>
      </li>
    `;
  }
}

export default Message;
