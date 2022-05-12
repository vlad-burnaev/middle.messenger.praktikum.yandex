import Block from '../../core/Block';
import './link.scss';
import classnames from '../../helpers/classnames';

interface ILinkProps {
  label: string,
  to?: string,
  className?: string;
  onClick: () => void;
}

interface ILinkPropsWithEvents extends Omit<ILinkProps, 'onClick'>{
  events: {
    click: () => void
  }
}

class Link extends Block<ILinkPropsWithEvents> {
  constructor(props: ILinkProps) {
    const {
      label, to, className, onClick,
    } = props;

    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      label,
      to,
      className: classnames('link', ...classNames),
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return `
      {{#if to}}
        <a 
          href={{to}} 
          class='{{className}}'
        >
          {{label}}
        </a>
      {{else}}
        <div class='{{className}}'>
          {{label}}
        </div>
      {{/if}}
    `;
  }
}

export default Link;
