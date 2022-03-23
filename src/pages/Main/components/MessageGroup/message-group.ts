import Block from '../../../../utils/Block';
import template from './message-group.hbs';
import styles from './message-group.pcss';
import { Message } from '../Message/message';

// interface MessageGroupProps {
//   date: string,
//   type: string,
//   messages: MessageProps[]
// }

export class MessageGroup extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    this.children.message1 = new Message({ text: 'text1', meta: { status: 'isSend', time: '15:00' } });
    this.children.message2 = new Message({ text: 'text2', meta: { status: 'isSend', time: '16:00' } });
    this.children.message3 = new Message({ text: 'text3', meta: { status: 'isSend', time: '17:00' } });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
