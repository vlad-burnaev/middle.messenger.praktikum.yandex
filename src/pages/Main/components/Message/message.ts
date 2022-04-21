import Handlebars from 'handlebars/dist/handlebars.runtime';
import Block from '../../../../core/Block';
import template from './message.hbs';
import * as styles from './message.pcss';
import { Checkmark } from '../../../../../static/icons/checkmark';

type MessageStatus = 'sent' | 'delivered';

Handlebars.registerHelper('isMessageDelivered', (status: MessageStatus) => status === 'delivered');

export interface MessageProps {
  text: string,
  meta: {
    status: MessageStatus,
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
