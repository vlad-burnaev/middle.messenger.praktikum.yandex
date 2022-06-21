import Block from '../../core/Block';
import './link.scss';
import classnames from '../../helpers/classnames';

interface ILinkProps {
  label: string,
  to?: string,
  className?: string;
  onClick: () => void;
  dataTestId?: string;
}

interface ILinkPropsWithEvents extends Omit<ILinkProps, 'onClick'>{
  events: {
    click: () => void
  }
}

class Link extends Block<ILinkPropsWithEvents> {
  constructor(props: ILinkProps) {
    const {
      label, to, className, onClick, dataTestId,
    } = props;

    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      label,
      to,
      className: classnames('link', ...classNames),
      dataTestId,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `
      {{#if to}}
        <a 
          href={{to}} 
          class='{{className}}'
          {{#if dataTestId}}data-testid={{dataTestId}}{{/if}}
        >
          {{label}}
        </a>
      {{else}}
        <div class='{{className}}' {{#if dataTestId}}data-testid={{dataTestId}}{{/if}}>
          {{label}}
        </div>
      {{/if}}
    `;
  }
}

export default Link;
