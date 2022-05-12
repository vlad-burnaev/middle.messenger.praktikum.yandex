import Block from '../../../../core/Block';
import './delete-user-popup.scss';
import { InputType, InputVariants } from '../../../../components/input/input';
import { ButtonTypes } from '../../../../components/button/button';

interface IAddUserPopupProps {
  onSearch: (login: string) => void,
  searchResult: Nullable<User[]>,
  onDeleteUser: (id: number) => void,
  onClose: () => void,
}

class DeleteUserPopup extends Block<IAddUserPopupProps> {
  protected getStateFromProps() {
    this.state = {
      onSearchUserClick: this.handleSearchUser.bind(this),
      onDeleteUserClick: this.handleDeleteUser.bind(this),
    };
  }

  handleDeleteUser(e: Event) {
    const button = e.target as HTMLElement;
    const { id } = button.dataset;

    if (id) {
      this.props.onDeleteUser(parseInt(id, 10));
      this.props.onClose();
    }
  }

  // todo - искать только среди юзеров в чате
  handleSearchUser(e: Event) {
    e.preventDefault();

    const loginInput = this.refs.login as HTMLInputElement;

    if (loginInput) {
      this.props.onSearch(loginInput.value);
    }
  }

  render() {
    // language=hbs
    return `
      <div class="delete-user-popup">
        <div class="overlay"></div>
        <div class="modal">
          <div class="modal__content">
            <h3 class="delete-user-popup-title">Удалить пользователя</h3>
            <form class="delete-user-popup-form">
              {{#if ${this.props.searchResult === null} }}
                  {{{ Input
                        type=${InputType.TEXT}
                        ref="login"
                        variant=${InputVariants.CLASSIC}
                        placeholder='Логин'
                  }}}
                  {{{ Button
                        label='Найти'
                        type=${ButtonTypes.SUBMIT}
                        onClick=onSearchUserClick
                        className='delete-user-popup-button delete-user-popup-button_submit'
                  }}}
              {{else}}
                  <ul class="search-result-list">
                      ${this.props.searchResult && this.props.searchResult.map((user: User) => `
                        <li class="search-result-item">
                          {{{ Button label="${user.login}" dataId=${user.id} onClick=onDeleteUserClick }}}
                        </li>`).join('')}
                  </ul>
              {{/if}}
              {{{ Button 
                    label='Закрыть'
                    type=${ButtonTypes.BUTTON}
                    onClick=onClose 
                    className='delete-user-popup-button delete-user-popup-button_close' 
              }}}
            </form>
          </div>
        </div>
      </div>
  `;
  }
}

export default DeleteUserPopup;
