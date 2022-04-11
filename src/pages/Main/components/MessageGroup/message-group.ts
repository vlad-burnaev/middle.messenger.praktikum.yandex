import Handlebars from 'handlebars/dist/handlebars.runtime';
import Block from '../../../../utils/Block';
import template from './message-group.hbs';
import * as styles from './message-group.pcss';
import { Message, MessageProps } from '../Message/message';

type MessageGroupTypes = 'my' | 'companion';

Handlebars.registerHelper('isMyMessages', (type: MessageGroupTypes) => type === 'my');

export interface MessageGroupProps {
  date: string,
  type: MessageGroupTypes,
  messages: MessageProps[]
}

export class MessageGroup extends Block {
  constructor(props: MessageGroupProps) {
    super({ ...props, styles });
  }

  initChildren() {
    this.children.message1 = new Message(this.props.messages[0]);
    this.children.message2 = new Message(this.props.messages[1]);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
