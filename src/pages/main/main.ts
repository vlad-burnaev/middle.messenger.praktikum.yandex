import { withStore } from '../../utils/withStore';
import { withRouter } from '../../utils/withRouter';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import Router from '../../core/Router';
import './main.scss';
import { IconName } from '../../components/icon/icon';

interface IMainProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  isLoading: boolean
}

class Main extends Block<IMainProps> {
  constructor(props: IMainProps) {
    super({ ...props });
  }

  protected getStateFromProps() {
    this.state = {
      chatPreviews: [
        {
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
        },
        {
          avatarSrc: '',
          name: 'Оля',
          lastMessage: {
            text: 'some text 2',
          },
          meta: {
            time: '16:00',
            newMessagesCount: 2,
          },
        },
        {
          avatarSrc: '',
          name: 'Вася',
          lastMessage: {
            text: 'some text 3',
            prefix: 'Он: ',
          },
          meta: {
            time: '17:00',
          },
        },
      ],
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
                    Профиль
                    <div class="profile-link__icon">
                        {{{ Icon name=${IconName.ArrowRight1} }}}
                    </div>
                  </a>
                  <input type="text" class="search" placeholder="Поиск">
              </nav>
              <ul class="chats-preview">
                  {{#each chatPreviews}}
                      {{{ ChatPreview
                            avatarSrc=avatarSrc
                            name=name
                            lastMessage=lastMessage
                            meta=meta
                      }}}
                  {{/each}}
              </ul>
          </div>
          <div class="chat">
              {{{ Chat
                    avatarSrc=chat.avatarSrc
                    name=chat.name
                    messageGroups=chat.messageGroups
              }}}
          </div>
          {{{ Navbar }}}
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
