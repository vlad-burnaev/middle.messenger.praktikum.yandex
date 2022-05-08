import './inputField.scss';
import Block from '../../core/Block';
import classnames from '../../helpers/classnames';
import { IInputProps, InputType } from '../input';

interface IInputFieldProps extends IInputProps {
  ref?: string,
  label: string,
  errorMessage?: string,
  isFormInput?: boolean,
}

class InputField extends Block<IInputFieldProps> {
  constructor(props: IInputFieldProps) {
    const isFormInput = props.isFormInput ?? false;
    const defaultProps = {
      type: InputType.TEXT,
      isFormInput,
      containerClassName: isFormInput ? 'form__input-container' : '',
      readonly: false,
    };

    super({
      ...defaultProps,
      ...props,
    });
  }

  render() {
    const errorClassName = classnames('input__error-message', {
      'input__error-message_hidden': !this.props.errorMessage,
    });

    return `
      <div class='{{containerClassName}}' >
        <div class='floating-input-container' >
          {{{ Input 
              value=value
              className=className
              type=type
              name=name
              placeholder=placeholder
              readonly=readonly
              onFocus=onFocus
              onBlur=onBlur
              invalid=${!!this.props.errorMessage}
          }}}
          <span class='input__label'>{{label}}</span>
        </div>
      <span class="${errorClassName}">{{errorMessage}}</span>
    </div>
    `;
  }
}

export default InputField;
