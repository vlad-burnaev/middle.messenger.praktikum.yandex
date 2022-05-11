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
import ChatMenuPopup from './components/chatMenuPopup/chat-menu-popup';
import { AddUserPopup } from './components/addUserPopup';

registerComponent(ChatMenuPopup, 'ChatMenuPopup');
registerComponent(CreateChatPopup, 'CreateChatPopup');
registerComponent(AddUserPopup, 'AddUserPopup');

interface IMainProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  chats: Nullable<Chat[]>,
  chatUsers: Nullable<User[]>,
  searchResult: Nullable<User[]>,
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

  setIsCreateChatPopupVisible(isVisible: boolean) {
    this.setState({
      ...this.state,
      isCreateChatPopupVisible: isVisible,
    });
  }

  setIsChatMenuPopupVisible(isVisible: boolean) {
    this.setState({
      ...this.state,
      isChatMenuPopupVisible: isVisible,
    });
  }

  setIsAddUserPopupVisible(isVisible: boolean) {
    this.setState({
      ...this.state,
      isAddUserPopupVisible: isVisible,
    });
  }

  handleToggleIsChatMenuPopupVisible() {
    this.setState({
      ...this.state,
      isChatMenuPopupVisible: !this.state.isChatMenuPopupVisible,
    });
  }

  protected getStateFromProps() {
    this.state = {
      isCreateChatPopupVisible: false,
      onOpenCreateChatPopup: this.setIsCreateChatPopupVisible.bind(this, true),
      onCloseCreateChatPopup: this.setIsCreateChatPopupVisible.bind(this, false),
      onCreateChat: (title: string) => this.props.dispatch(ChatsService.createChat, { title }),

      chatMenuItems: [
        {
          label: 'Добавить пользователя',
          onClick: () => {
            this.setIsAddUserPopupVisible(true);
            this.setIsChatMenuPopupVisible(false);
          }
          ,
        },
        {
          label: 'Удалить пользователя',
          onClick: () => {},
        },
      ],
      isChatMenuPopupVisible: false,
      onOpenChatMenuPopup: this.setIsChatMenuPopupVisible.bind(this, true),
      onCloseChatMenuPopup: this.setIsChatMenuPopupVisible.bind(this, false),
      onToggleChatMenuPopup: this.handleToggleIsChatMenuPopupVisible.bind(this),

      isAddUserPopupVisible: false,
      onOpenAddUserPopup: this.setIsAddUserPopupVisible.bind(this, true),
      onCloseAddUserPopup: this.setIsAddUserPopupVisible.bind(this, false),
      onSearchUser: (login: string) => this.props.dispatch(ChatsService.searchUser, { login }),
      // todo - выпилить хардкод chatId
      onAddUser: (userId: number) => this.props.dispatch(ChatsService.addUserToChat, { users: [userId], chatId: 987 }),

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
                    onMenuButtonClick=onToggleChatMenuPopup
              }}}
          </div>
          {{#if isCreateChatPopupVisible}}
              {{{ CreateChatPopup
                    onSubmit=onCreateChat
                    onClose=onCloseCreateChatPopup
              }}}
          {{/if}}
          {{#if isAddUserPopupVisible}}
              {{{ AddUserPopup
                    onSearch=onSearchUser
                    searchResult=searchResult
                    onAddUser=onAddUser
                    onClose=onCloseAddUserPopup
              }}}
          {{/if}}
          {{#if isChatMenuPopupVisible}}
              {{{ ChatMenuPopup
                    items=chatMenuItems
                    onClose=onCloseChatMenuPopup
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
    chatUsers: state.chatUsers,
    searchResult: state.searchResult,
    isLoading: state.isLoading,
  };
}

export default withRouter<IMainProps>(
  withStore<IMainProps>(
    Main,
    mapStateToProps,
  ),
);
