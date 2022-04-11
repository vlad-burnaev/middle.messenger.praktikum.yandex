/* eslint-disable no-unused-vars */
import Block from '../../../utils/Block';
import template from './input.hbs';
import * as styles from './input.pcss';

export interface InputProps {
  id: string,
  type: string,
  events?: {
    input?: (e: any) => void,
    focus?: (e: any) => void,
    blur?: (e: any) => void,
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
