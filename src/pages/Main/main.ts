import Block from '../../core/Block';
import template from './main.hbs';
import ChatPreview from './components/ChatPreview';
import { ArrowRight1 } from '../../../static/icons/arrow-right-1';
import Chat from './components/Chat';
import * as styles from './main.pcss';
import { mainPageData } from './main.data';
import Navbar from '../../components/Navbar';
import { AuthService } from '../../services/auth';

const authService = new AuthService();

export class Main extends Block {
  constructor() {
    super({ styles });

    authService.getUser();
  }

  initChildren() {
    this.children.ChatPreview1 = new ChatPreview(mainPageData.chatPreviews[0]);
    this.children.ChatPreview2 = new ChatPreview(mainPageData.chatPreviews[1]);
    this.children.ChatPreview3 = new ChatPreview(mainPageData.chatPreviews[2]);
    this.children.Chat = new Chat(mainPageData.chat);
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props, ArrowRight1 });
  }
}
