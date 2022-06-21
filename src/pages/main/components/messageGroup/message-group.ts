import Block from '../../../../core/Block';
import './message-group.scss';
import classnames from '../../../../helpers/classnames';
import { getMonth } from '../../../../utils/date-formatter';

// todo - переделать на emum
type MessageGroupTypes = 'my' | 'companion'

export interface IMessageGroupProps {
  date: Date,
  type: MessageGroupTypes,
  messages: string
}

class MessageGroup extends Block<IMessageGroupProps> {
  constructor(props: IMessageGroupProps) {
    super({ ...props, date: new Date(props.date), messages: JSON.parse(props.messages) });
  }

  render() {
    const { date } = this.props;

    const className = classnames('message-group', {
      'message-group_my': this.props.type === 'my',
      'message-group_companion': this.props.type === 'companion',
    });

    // language=hbs
    return `
        <li>
            <ul class="${className}">
                {{#each messages}}
                    {{{ Message
                          text=text
                          isRead=isRead
                          date=date
                    }}}
                {{/each}}
                <div class="message-group__date">${date.getDate()} ${getMonth(date)}</div>
            </ul>
        </li>
    `;
  }
}

export default MessageGroup;
