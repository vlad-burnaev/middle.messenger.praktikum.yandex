import { withStore } from '../../utils/withStore';
import { withRouter } from '../../utils/withRouter';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import Router from '../../core/Router';
import { mainPageData } from './main.data';
import './main.scss';

interface IMainProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  isLoading: boolean
}

class Main extends Block<IMainProps> {
  constructor(props: IMainProps) {
    super({ ...props });
  }
  //
  // componentDidMount() {
  //   this.props.store.dispatch(chatsService.getChats);
  // }
  //
  // initChildren() {
  //   this.children.profileLink = new ProfileLink({
  //     events: {
  //       click: () => {
  //         new Router().go(Routes.Profile);
  //       },
  //     },
  //   });

  render() {
    // language=hbs
    return `
        <main class="main-page">
          <div class="chats-preview-block">
              <nav class="chats-preview-block-header">
                  <a class="profile-link c-pointer">
                    Профиль
                    <div class="profile-link__icon">
                        {{{ ArrowRight1 }}}
                    </div>
                  </a>
                  <input type="text" class="search" placeholder="Поиск">
              </nav>
              <ul class="chats-preview">
                  {{{ ChatPreview
                        avatarSrc='${mainPageData.chatPreviews[0].avatarSrc}'
                        name='${mainPageData.chatPreviews[0].name}'
                        lastMessage='${mainPageData.chatPreviews[0].lastMessage}'
                        meta='${mainPageData.chatPreviews[0].meta}'
                  }}}
                  {{{ ChatPreview
                        avatarSrc='${mainPageData.chatPreviews[1].avatarSrc}'
                        name='${mainPageData.chatPreviews[1].name}'
                        lastMessage='${mainPageData.chatPreviews[1].lastMessage}'
                        meta='${mainPageData.chatPreviews[1].meta}'
                  }}}
              </ul>
          </div>
          <div class="chat">
              {{{ Chat
                    avatarSrc='${mainPageData.chat.avatarSrc}'
                    name='${mainPageData.chat.name}'
                    messageGroups='${mainPageData.chat.messageGroups}'
              }}}
          </div>
        </main>
      `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    isLoading: state?.isLoading,
  };
}

export default withRouter<IMainProps>(
  withStore<IMainProps>(
    Main,
    mapStateToProps,
  ),
);
