import './input.scss';
import Block from '../../core/Block';
import classnames from '../../helpers/classnames';

export enum InputType {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  EMAIL = 'email',
  FILE = 'file',
  IMAGE = 'image',
  PASSWORD = 'password',
  SUBMIT = 'submit',
  TEL = 'tel',
  TEXT = 'text'
}

export enum InputVariants {
  CLASSIC,
  FILLED,
}

export interface IInputProps {
  id?: string,
  className?: string,
  type?: InputType,
  value?: string,
  name?: string,
  placeholder?: string,
  readonly?: boolean,
  onBlur?: EventListener,
  onFocus?: EventListener,
  onChange?: EventListener,
  accept?: string,
  variant?: InputVariants,
  invalid?: boolean,
  tabindex?: string,
}

interface IInputPropsWithEvents extends Omit<IInputProps, 'onBlur' | 'onFocus' | 'onChange'> {
  events: {
    blur?: EventListener,
    focus?: EventListener,
    input?: EventListener,
  }
}

class Input extends Block<IInputPropsWithEvents> {
  constructor(props: IInputProps) {
    const {
      onBlur,
      onFocus,
      onChange,
      ...rest
    } = props;

    super({
      ...rest,
      events: {
        blur: onBlur,
        focus: onFocus,
        input: onChange,
      },
    });
  }

  render() {
    const className = classnames({
      input_invalid: !!this.props.invalid,
      input_filled: this.props.variant === InputVariants.FILLED,
      [this.props.className ?? '']: Boolean(this.props.className),
    });

    return `
      <input 
        {{#if value}}
          value="{{value}}"
        {{/if}}
        {{#if id}}
          id="{{id}}"
        {{/if}}
        {{#if accept}}
          accept="{{accept}}"
        {{/if}}
        class="input ${className}"
        type={{type}} 
        name={{name}} 
        placeholder={{placeholder}}
        {{#if readonly}} readonly {{/if}}>
  `;
  }
}

export default Input;
