import { withStore } from '../../utils/withStore';
import { withRouter } from '../../utils/withRouter';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import Router from '../../core/Router';
import './main.scss';
import { IconName } from '../../components/icon/icon';
import { Routes } from '../../core/routes';
import { ChatsService } from '../../services/chats';
import registerComponent from '../../core/registerComponent';
import { CreateChatPopup } from './components/createChatPopup';

registerComponent(CreateChatPopup, 'CreateChatPopup');

interface IMainProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  chats: Nullable<Chat[]>,
  isLoading: boolean
}

class Main extends Block<IMainProps> {
  constructor(props: IMainProps) {
    super({ ...props });
  }

  componentDidMount() {
    if (this.props.chats === null) {
      this.props.dispatch(ChatsService.getChats);
    }
  }

  handleGoToProfilePage() {
    window.router.go(Routes.Profile);
  }

  setIsCreateChatPopupVisible(isOpen: boolean) {
    this.setState({
      ...this.state,
      isCreateChatPopupVisible: isOpen,
    });
  }

  protected getStateFromProps() {
    this.state = {
      isCreateChatPopupVisible: false,
      onOpenCreateChatPopup: this.setIsCreateChatPopupVisible.bind(this, true),
      onCloseCreateChatPopup: this.setIsCreateChatPopupVisible.bind(this, false),
      onCreateChat: (title: string) => this.props.dispatch(ChatsService.createChat, { title }),
      onGoToProfileClick: this.handleGoToProfilePage.bind(this),
      chat: {
        avatarSrc: '',
        name: 'Василий Вакуленко',
        messageGroups: [
          {
            date: '26 марта',
            type: 'My',
            messages: [
              { text: 'Пап, привет!', meta: { status: 'delivered', time: '15:00' } },
              { text: 'Как дела?', meta: { status: 'sent', time: '14:00' } },
            ],
          },
          {
            date: '27 марта',
            type: 'Companion',
            messages: [
              { text: 'Нормально!', meta: { status: 'delivered', time: '17:00' } },
              { text: 'Как в школе?', meta: { status: 'delivered', time: '16:00' } },
            ],
          },
          {
            date: '28 марта',
            type: 'My',
            messages: [
              { text: 'Пап, привет!', meta: { status: 'delivered', time: '15:00' } },
              { text: 'Как дела?', meta: { status: 'delivered', time: '14:00' } },
            ],
          },
        ],
      },
    };
  }

  render() {
    // language=hbs
    return `
        <main class="main-page">
          <div class="chats-preview-block">
              <nav class="chats-preview-block-header">
                  <a class="profile-link c-pointer">
                    {{{ Link label='Профиль' onClick=onGoToProfileClick className='profile-link__label' }}}
                    <div class="profile-link__icon">
                        {{{ Icon name=${IconName.ArrowRight1} }}}
                    </div>
                  </a>
                  <input type="text" class="search" placeholder="Поиск">
              </nav>
              <ul class="chats-preview">
                  {{#each chats}}
                      {{{ ChatPreview
                              avatarSrc=avatarSrc
                              title=title
                              lastMessage=lastMessage
                      }}}
                  {{/each}}
                  <div class="create-chat-block">
                      {{{ Button label='Создать новый чат' onClick=onOpenCreateChatPopup }}}
                  </div>
              </ul>
          </div>
          <div class="chat">
              {{{ Chat
                    avatarSrc=chat.avatarSrc
                    name=chat.name
                    messageGroups=chat.messageGroups
              }}}
          </div>
            {{#if isCreateChatPopupVisible}}
                {{{ CreateChatPopup
                      onSubmit=onCreateChat
                      onClose=onCloseCreateChatPopup
                }}}
            {{/if}}
          {{{ Navbar }}}
        </main>
      `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    chats: state.chats,
    isLoading: state.isLoading,
  };
}

export default withRouter<IMainProps>(
  withStore<IMainProps>(
    Main,
    mapStateToProps,
  ),
);
