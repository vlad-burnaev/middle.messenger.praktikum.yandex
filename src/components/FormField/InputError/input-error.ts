/* eslint-disable no-unused-vars */
import Block from '../../../utils/Block';
import template from './input-error.hbs';
import styles from './input-error.pcss';

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
