import Block from '../../../../core/Block';
import './chat.scss';
import { IconName } from '../../../../components/icon/icon';
import { IMessageGroupProps } from '../messageGroup/message-group';
import { InputType } from '../../../../components/input/input';

export interface IChatProps {
  avatarSrc: string,
  name: string,
  messageGroups: IMessageGroupProps[]
}

class Chat extends Block<IChatProps> {
  constructor(props: IChatProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <article class="chat">
        <section class="chat-header">
            <div class="chat-header__left-block">
                <div class="chat-header__avatar">
                    <img src={{avatarSrc}}>
                </div>
                <div class="chat-header__name">{{name}}</div>
            </div>
            <div class="chat-header__right-block">
                {{{ Icon name=${IconName.Menu} }}}
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
                    type=${InputType.TEXT}
                    name='message'
            }}}
            <button class="new-message-panel__enter-button">
                {{{ Icon name=${IconName.ArrowRight2} }}}
            </button>
        </form>
      </article>
    `;
  }
}

export default Chat;
