import Block from '../../utils/Block';
import template from './main.hbs';
import ChatPreview from './components/ChatPreview';
import { ArrowRight1 } from '../../../static/icons/arrow-right-1';
import Chat from './components/Chat';
import styles from './main.pcss';

export class Main extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    this.children.ChatPreview1 = new ChatPreview({
      avatarSrc: '',
      name: 'Петя',
      lastMessage: {
        text: 'some text',
        prefix: 'Вы: ',
      },
      meta: {
        time: '15:00',
        newMessagesCount: 2,
      },
    });
    this.children.ChatPreview2 = new ChatPreview({
      avatarSrc: '',
      name: 'Оля',
      lastMessage: {
        text: 'some text 2',
      },
      meta: {
        time: '16:00',
        newMessagesCount: 2,
      },
    });
    this.children.ChatPreview3 = new ChatPreview({
      avatarSrc: '',
      name: 'Вася',
      lastMessage: {
        text: 'some text 3',
        prefix: 'Он: ',
      },
      meta: {
        time: '17:00',
      },
    });
    this.children.Chat = new Chat();
  }

  render() {
    return this.compile(template, { ...this.props, ArrowRight1 });
  }
}
