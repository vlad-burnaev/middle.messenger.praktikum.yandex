import Block from '../../core/Block';
import './go-back-link.scss';
import { IconName } from '../icon/icon';

interface GoBackLinkProps {
  onClick: () => void;
}

interface GoBackLinkPropsWithEvents extends Omit<GoBackLinkProps, 'onClick'> {
  events: {
    click: () => void
  }
}

class GoBackLink extends Block<GoBackLinkPropsWithEvents> {
  constructor(props: GoBackLinkProps) {
    super({
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `
      <button class="go-back-link">
        <div class="go-back-link__button">
            {{{ Icon name=${IconName.ArrowLeft} }}}
        </div>
      </button>
    `;
  }
}

export default GoBackLink;
