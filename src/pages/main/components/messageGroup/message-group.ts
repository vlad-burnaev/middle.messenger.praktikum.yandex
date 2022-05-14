import Block from '../../../../core/Block';
import './message-group.scss';
import { IMessageProps } from '../message/message';
import classnames from '../../../../helpers/classnames';

enum MessageGroupTypes {
  My = 'My',
  Companion = 'Companion'
}

export interface IMessageGroupProps {
  date: string,
  type: MessageGroupTypes,
  messages: IMessageProps[]
}

class MessageGroup extends Block<IMessageGroupProps> {
  constructor(props: IMessageGroupProps) {
    super({ ...props, messages: JSON.parse(props.messages) });
  }

  render() {
    const className = classnames('message-group', {
      'message-group_my': this.props.type === MessageGroupTypes.My,
      'message-group_companion': this.props.type === MessageGroupTypes.Companion,
    });
    // language=hbs
    return `
        <li>
            <ul class="${className}">
                {{#each messages}}
                    {{{ Message
                          text=text
                          meta=meta
                    }}}
                {{/each}}
                <div class="message-group__date">{{date}}</div>
            </ul>
        </li>
    `;
  }
}

export default MessageGroup;
