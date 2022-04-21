/* eslint-disable no-unused-vars */
import Block from '../../../core/Block';
import template from './input-error.hbs';
import * as styles from './input-error.pcss';

interface InputErrorProps {
  isValid: boolean;
  errorMessage: string
}

export class InputError extends Block {
  constructor(props: InputErrorProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
