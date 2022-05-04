import Block from '../../core/Block';
import './new-button.scss';
import classnames from '../../helpers/classnames';

interface IButtonProps {
  label: string,
  disabled?: boolean,
  className?: string,
  onClick: () => void,
}

interface IButtonPropsWithEvents extends Omit<IButtonProps, 'onClick'> {
  events: {
    click: () => void,
  }
}

class NewButton extends Block<IButtonPropsWithEvents> {
  constructor(props: IButtonProps) {
    const {
      label, disabled = false, className, onClick,
    } = props;

    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      label,
      disabled,
      className: classnames(...classNames, {
        button: true,
      }),
      events: {
        click: onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `
      <button 
        {{#if disabled}}
            disabled
        {{/if}}
        class="{{className}}"
      >
        {{ label }}
      </button>
    `;
  }
}

export default NewButton;
