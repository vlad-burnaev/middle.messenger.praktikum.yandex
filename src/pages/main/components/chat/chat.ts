import Block from '../../../../core/Block';
import './chat.scss';
import { IconName } from '../../../../components/icon/icon';
import { IMessageGroupProps } from '../messageGroup/message-group';
import { InputType } from '../../../../components/input/input';
import registerComponent from '../../../../core/registerComponent';
import { ChatMenuButton } from './chatMenuButton';

registerComponent(ChatMenuButton, 'ChatMenuButton');

export interface IChatProps {
  users: User[],
  avatarSrc: string,
  name: string,
  messageGroups: IMessageGroupProps[],
  messageValue: string,
  onChangeMessage: (e: Event) => void,
  onSubmit: () => void,
  onMenuButtonClick: () => void
}

class Chat extends Block<IChatProps> {
  constructor(props: IChatProps) {
    super({ ...props });
  }

  render() {
    console.log('messageValue', this.props.messageValue);
    const getUsers = () => {
      if (!this.props.users) {
        return '';
      }

      return this.props.users.map((u) => u.login).join(', ');
    };
    // language=hbs
    return `
      <article class="chat">
        <section class="chat-header">
            <div class="chat-header__left-block">
                <div class="chat-header__avatar">
                    <img src={{avatarSrc}}>
                </div>
                <div class="chat-header__name">${getUsers()}</div>
            </div>
            <div class="chat-header__right-block">
                {{{ ChatMenuButton onClick=onMenuButtonClick }}}
            </div>
        </section>
        <ul class="chat-main">
            {{#each messageGroups}}
                {{{ MessageGroup
                      date=date
                      type=type
                      messages=messages
                }}}
            {{/each}}
        </ul>
        <form class="new-message-panel">
            <button class="new-message-panel__attach">
                {{{ Icon name=${IconName.Clip} }}}
            </button>
            {{{ Input
                  value=messageValue
                  type='${InputType.TEXT}'
                  onChange=onChangeMessage
                  name='message'
            }}}
            {{{ Button label='Отправить' onClick=onSubmit className="new-message-panel__enter-button" }}}
        </form>
      </article>
    `;
  }
}

export default Chat;
