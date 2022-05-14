import Block from '../../../../core/Block';
import './chat.scss';
import { IconName } from '../../../../components/icon/icon';
import { IMessageGroupProps } from '../messageGroup/message-group';
import { InputType, InputVariants } from '../../../../components/input/input';
import registerComponent from '../../../../core/registerComponent';
import { ChatMenuButton } from './chatMenuButton';

registerComponent(ChatMenuButton, 'ChatMenuButton');

export interface IChatProps {
  users: User[],
  avatarSrc: string,
  name: string,
  messageGroups: IMessageGroupProps[],
  message: string,
  messages: string[],
  onChangeMessage: (value: string) => void,
  onSubmit: () => void,
  onMenuButtonClick: () => void
}

class Chat extends Block<IChatProps> {
  constructor(props: IChatProps) {
    super({ ...props });
  }

  protected getStateFromProps() {
    this.state = {
      onFocus: this.handleInputEvents.bind(this),
      onBlur: this.handleInputEvents.bind(this),
      handleSubmit: this.handleFormSubmit.bind(this),
    };
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();

    this.props.onSubmit();
  }

  handleInputEvents(e: Event) {
    if (e.target) {
      const element = e.target as HTMLInputElement;
      this.validateInput(element.name as InputType);
    }
  }

  validateInput(field: InputType) {
    const newValue = (this.refs[field] as HTMLInputElement).value;

    this.props.onChangeMessage(newValue);
  }

  // todo - заменить div на form (new-message-panel)
  render() {
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
            {{ messages }}
        </ul>
        <div class="new-message-panel">
            <button class="new-message-panel__attach">
                {{{ Icon name=${IconName.Clip} }}}
            </button>
            {{{ Input
                  value=message
                  type='${InputType.TEXT}'
                  variant=${InputVariants.FILLED}
                  name='message'
                  ref='message'
                  placeholder='Сообщение'
                  onBlur=onBlur
            }}}
            {{{ Button label='Отправить' onClick=handleSubmit className="new-message-panel__enter-button" }}}
        </div>
      </article>
    `;
  }
}

export default Chat;
