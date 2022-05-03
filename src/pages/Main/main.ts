import Block from '../../core/Block';
import template from './main.hbs';
import ChatPreview from './components/ChatPreview';
import { ArrowRight1 } from '../../../static/icons/arrow-right-1';
import Chat from './components/Chat';
import * as styles from './main.pcss';
import { mainPageData } from './main.data';
import Navbar from '../../components/Navbar';
import { withStore } from '../../utils/withStore';
import { Routes } from '../../core/routes';
import { ProfileLink } from './components/ProfileLink/profile-link';
import Router from '../../core/Router';
import { Store } from '../../core/Store';

class Main extends Block {
  constructor(props: {store: Store<AppState>}) {
    super({ ...props, styles });
  }

  initChildren() {
    this.children.profileLink = new ProfileLink({
      events: {
        click: () => {
          new Router().go(Routes.Profile);
        },
      },
    });
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

export default withStore(Main);
