import Block from '../../../../utils/Block';
import template from './message.hbs';
import styles from './message.pcss';
import { Checkmark } from '../../../../../static/icons/checkmark';

export interface MessageProps {
  text: string,
  meta: {
    status: string,
    time: string
  }
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super({ ...props, styles, Checkmark });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
