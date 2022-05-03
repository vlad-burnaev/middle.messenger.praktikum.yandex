import Block from '../../core/Block';
import template from './button.hbs';
import * as styles from './button.pcss';

export interface ButtonProps {
  label: string;
  isDisabled?: boolean;
  events?: {
    click?: () => void;
  },
  classNames?: string[];
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
