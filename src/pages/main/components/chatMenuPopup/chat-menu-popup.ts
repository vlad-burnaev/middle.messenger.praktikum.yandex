import Block from '../../../../core/Block';
import './chat-menu-popup.scss';

interface IChatMenuPopupProps {
  items: {
    label: string,
    onClick: () => void
  }[],
}

class ChatMenuPopup extends Block<IChatMenuPopupProps> {
  constructor(props: IChatMenuPopupProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <div class="chat-menu-popup">
        <ul class="chat-menu-items">
          {{#each items}}
            <li class="chat-menu-item">
                {{{ Button label=label onClick=onClick }}}
            </li>
          {{/each}}
        </ul>
      </div>
    `;
  }
}

export default ChatMenuPopup;
