import Block from '../../core/Block';
import template from './main.hbs';
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
import { ChatsService } from '../../services/chats';
import ChatPreviews from './components/ChatPreviews';

const chatsService = new ChatsService();

class Main extends Block {
  constructor(props: {store: Store<AppState>}) {
    super({ ...props, styles });
  }

  componentDidMount() {
    this.props.store.dispatch(chatsService.getChats);
  }

  initChildren() {
    this.children.profileLink = new ProfileLink({
      events: {
        click: () => {
          new Router().go(Routes.Profile);
        },
      },
    });
    this.children.ChatPreviews = new ChatPreviews({ previews: mainPageData.chatPreviews });
    this.children.Chat = new Chat(mainPageData.chat);
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props, ArrowRight1 });
  }
}

export default withStore(Main);
