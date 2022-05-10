import './profileFormInput.scss';
import Block from '../../../core/Block';
import classnames from '../../../helpers/classnames';
import { InputType } from '../../input';

interface IProfileFormInputProps {
  type?: InputType,
  readonly?: boolean,
  value: string,
  name?: string,
  onBlur?: EventListener,
  invalid?: boolean,
  className?: string,
}

interface IProfileFormInputPropsWithEvents extends Omit<IProfileFormInputProps, 'onBlur'> {
  events: {
    blur?: EventListener,
  }
}

class ProfileFormInput extends Block<IProfileFormInputPropsWithEvents> {
  constructor(props: IProfileFormInputProps) {
    const {
      className,
    } = props;

    const defaultProps = {
      type: InputType.TEXT,
      readonly: false,
    };

    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      ...defaultProps,
      ...props,
      className: classnames(...classNames, 'profile-form__input', {
        'profile-form__input_invalid': Boolean(props.invalid),
      }),
      events: {
        blur: props.onBlur,
      },
    });
  }

  render() {
    // language=hbs
    return `
        <input 
          value="{{value}}"
          name={{name}} 
          class={{className}}
          type={{type}}
          {{#if readonly}}readonly{{/if}}
        />
    `;
  }
}

export default ProfileFormInput;
