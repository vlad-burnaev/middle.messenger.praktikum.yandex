import './inputField.scss';
import Block from '../../core/Block';
import classnames from '../../helpers/classnames';
import { IInputProps } from '../input';
import { InputType } from '../input/input';

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

    // language=hbs
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
          <label class='input__label' for={{name}}>{{label}}</label>
        </div>
      <span class="${errorClassName}">{{errorMessage}}</span>
    </div>
    `;
  }
}

export default InputField;
