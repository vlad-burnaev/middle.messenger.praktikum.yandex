import Block from '../../utils/Block';
import template from './main.hbs';
import ChatPreview from './components/ChatPreview';
import { ArrowRight1 } from '../../../static/icons/arrow-right-1';
import Chat from './components/Chat';
import styles from './main.pcss';
import { mainPageData } from './main.data';

export class Main extends Block {
  constructor() {
    super({ styles });
  }

  initChildren() {
    this.children.ChatPreview1 = new ChatPreview(mainPageData.chatPreviews[0]);
    this.children.ChatPreview2 = new ChatPreview(mainPageData.chatPreviews[1]);
    this.children.ChatPreview3 = new ChatPreview(mainPageData.chatPreviews[2]);
    this.children.Chat = new Chat(mainPageData.chat);
  }

  render() {
    return this.compile(template, { ...this.props, ArrowRight1 });
  }
}
