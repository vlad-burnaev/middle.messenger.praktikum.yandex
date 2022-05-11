import Block from '../../../../../core/Block';
import { IconName } from '../../../../../components/icon/icon';
import './chat-menu-button.scss';

interface IChatMenuButtonProps {
  onClick: () => void
}

interface IChatMenuButtonPropsWithEvents {
  events: {
    click: () => void
  }
}

class ChatMenuButton extends Block<IChatMenuButtonPropsWithEvents> {
  constructor(props: IChatMenuButtonProps) {
    const { onClick } = props;

    super({
      events: {
        click: onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `
      <button class="chat-menu-button" type="button">
          {{{ Icon name=${IconName.Menu} }}}
      </button>
    `;
  }
}

export default ChatMenuButton;
