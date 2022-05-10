import './button.scss';
import Block from '../../core/Block';
import classnames from '../../helpers/classnames';

export enum ButtonTypes {
  SUBMIT = 'submit',
  BUTTON = 'button'
}

export enum ButtonVariants {
  CLASSIC,
  LINK
}

interface IButtonProps {
  id?: string,
  className?: string,
  type?: ButtonTypes,
  variant?: ButtonVariants,
  label: string,
  disabled: boolean,
  onClick: () => void,
  dataId: string
}

interface IButtonPropsWithEvents extends Omit<IButtonProps, 'onClick'> {
  events: {
    click: () => void,
  }
}

class Button extends Block<IButtonPropsWithEvents> {
  constructor(props: IButtonProps) {
    const {
      onClick, variant, className, id, label, type, disabled,
      dataId,
    } = props;

    const buttonVariant = variant ?? ButtonVariants.CLASSIC;
    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      id,
      label,
      disabled,
      dataId,
      type: type ?? ButtonTypes.BUTTON,
      variant: buttonVariant,
      className: classnames(...classNames, {
        button_link: buttonVariant === ButtonVariants.LINK,
        button: buttonVariant === ButtonVariants.CLASSIC,
      }),
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return `
      <button 
        {{#if id}}{{id}}{{/if}} 
        type={{type}} 
        class="{{className}}"
        {{#if disabled}}
          disabled
        {{/if}}
        {{#if dataId}}
          data-id="{{dataId}}"
        {{/if}}
      >
        {{ label }}  
      </button>
    `;
  }
}

export default Button;
