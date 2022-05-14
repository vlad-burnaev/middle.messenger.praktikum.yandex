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
import { AddUserPopup } from './components/addUserPopup';
import { ChatMenuPopup } from './components/chatMenuPopup';
import { DeleteUserPopup } from './components/deleteUserPopup';
import isValid from '../../helpers/formValidation';

registerComponent(ChatMenuPopup, 'ChatMenuPopup');
registerComponent(CreateChatPopup, 'CreateChatPopup');
registerComponent(AddUserPopup, 'AddUserPopup');
registerComponent(DeleteUserPopup, 'DeleteUserPopup');

interface IMainProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  state: AppState,
  activeChatId: Nullable<number>,
  user: Nullable<User>,
  chats: Nullable<Chat[]>,
  chatUsers: Nullable<User[]>,
  chatMessages: Message[],
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

  handleSelectActiveChat(chatId: number) {
    this.props.dispatch({ activeChatId: chatId, chatMessages: [] });
    this.props.dispatch(ChatsService.getChatUsers, { chatId });
    this.props.dispatch(ChatsService.createWSConnection, { chatId });
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

  setIsDeleteUserPopupVisible(isVisible: boolean) {
    this.setState({
      ...this.state,
      isDeleteUserPopupVisible: isVisible,
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
      chatUsersWithoutMe: this.props?.chatUsers?.filter((u) => u.id !== this.props?.user?.id),

      onChatPreviewClick: this.handleSelectActiveChat.bind(this),

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
          onClick: () => {
            this.setIsDeleteUserPopupVisible(true);
            this.setIsChatMenuPopupVisible(false);
          },
        },
      ],
      isChatMenuPopupVisible: false,
      onCloseChatMenuPopup: this.setIsChatMenuPopupVisible.bind(this, false),
      onToggleChatMenuPopup: this.handleToggleIsChatMenuPopupVisible.bind(this),

      isAddUserPopupVisible: false,
      onCloseAddUserPopup: this.setIsAddUserPopupVisible.bind(this, false),
      onSearchUser: (login: string) => this.props.dispatch(ChatsService.searchUser, { login }),
      onAddUser: (userId: number) => {
        this.props.dispatch(ChatsService.addUserToChat, {
          users: [userId],
          chatId: this.props.activeChatId,
        });
      },

      isDeleteUserPopupVisible: false,
      onOpenDeleteUserPopup: this.setIsDeleteUserPopupVisible.bind(this, true),
      onCloseDeleteUserPopup: this.setIsDeleteUserPopupVisible.bind(this, false),
      onDeleteUser: (userId: number) => {
        this.props.dispatch(ChatsService.deleteUserFromChat, {
          users: [userId],
          chatId: this.props.activeChatId,
        });
      },

      onGoToProfileClick: this.handleGoToProfilePage.bind(this),
      message: '',
      onChangeMessage: (value: string) => {
        this.setState({
          ...this.state,
          message: value,
        });
      },
      onSendMessage: () => {
        if (isValid('message', this.state.message)) {
          this.props.dispatch(ChatsService.sendMessage, { message: this.state.message });
          this.setState({
            ...this.state,
            message: '',
          });
        }
      },
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
    // todo - chats-preview-block в отдельный компонент
    const getChatPreviews = () => {
      if (!this.props.chats) {
        return '';
      }
      return this.props.chats.map((chat) => {
        return `
          {{{ ChatPreview
                id=${chat.id}
                avatarSrc='${chat.avatar ?? ''}'
                title='${chat.title}'
                lastMessage=${chat.lastMessage}
                isActive=${this.props.activeChatId ? this.props.activeChatId === chat.id : false}
                onClick=onChatPreviewClick
          }}}`;
      }).join('');
    };
    // language=hbs
    return `
        <main data-id="main-page">
          <div class="main-page">
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
                    ${getChatPreviews()}
                    <div class="create-chat-block">
                        {{{ Button label='Создать новый чат' onClick=onOpenCreateChatPopup }}}
                    </div>
                </ul>
            </div>
            <div class="chat">
              {{#if activeChatId}}
                {{{ Chat
                      users=chatUsers
                      avatarSrc=chat.avatar
                      name=chat.name
                      messageGroups=chat.messageGroups
                      message=message
                      messages=chatMessages
                      onChangeMessage=onChangeMessage
                      onSubmit=onSendMessage
                      onMenuButtonClick=onToggleChatMenuPopup
                }}}
              {{else}}
                <h3 class="no-active-chat">Выберите чат чтобы отправить сообщение</h3>
              {{/if}}
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
            {{#if isDeleteUserPopupVisible}}
                {{{ DeleteUserPopup
                      onSearch=onSearchUser
                      searchResult=searchResult
                      onDeleteUser=onDeleteUser
                      onClose=onCloseDeleteUserPopup
                }}}
            {{/if}}
            {{#if isChatMenuPopupVisible}}
                {{{ ChatMenuPopup
                      items=chatMenuItems
                      onClose=onCloseChatMenuPopup
                }}}
            {{/if}}
            {{{ Navbar }}}
          </div>
        </main>
      `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    user: state.user,
    activeChatId: state.activeChatId,
    chats: state.chats,
    chatUsers: state.chatUsers,
    chatMessages: state.chatMessages,
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
