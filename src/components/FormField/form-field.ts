/* eslint-disable no-unused-vars */
import Block from '../../core/Block';
import template from './form-field.hbs';
import * as styles from './form-field.pcss';
import { validate, ValidationScheme } from '../../core/validation';
import { Input } from './Input/input';
import InputError from './InputError';

export interface FormFieldProps {
  id: string,
  label: string,
  type: string,
  isRequired: boolean,
  validationScheme?: ValidationScheme,
  setValidationStatus?: (props: { name: string, value: string, status: boolean }) => void,
  errorMessage?: string,
}

export class FormField extends Block {
  constructor(props: FormFieldProps) {
    super({ ...props, styles });
  }

  isValid: boolean;

  validationHandler = (value: string) => {
    if (!value) return;

    const { setValidationStatus, validationScheme, id } = this.props;

    const isValid = validate(validationScheme, value);
    this.isValid = isValid;
    this.children.error.setProps({ isValid });

    if (setValidationStatus) {
      setValidationStatus({ name: id, value, status: isValid });
    }
  }

  initChildren() {
    this.children.input = new Input({
      ...this.props,
      value: '',
      events: {
        input: (e) => this.validationHandler(e.target.value),
        focus: (e) => this.validationHandler(e.target.value),
        blur: (e) => this.validationHandler(e.target.value),
      },
    });
    this.children.error = new InputError({
      errorMessage: this.props.errorMessage,
      isValid: true,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
