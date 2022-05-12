import Block from '../../../../core/Block';
import './add-user-popup.scss';
import { InputType, InputVariants } from '../../../../components/input/input';
import { ButtonTypes } from '../../../../components/button/button';

interface IAddUserPopupProps {
  onSearch: (login: string) => void,
  searchResult: Nullable<User[]>,
  onAddUser: (id: number) => void,
  onClose: () => void,
}

class AddUserPopup extends Block<IAddUserPopupProps> {
  protected getStateFromProps() {
    this.state = {
      onSearchUserClick: this.handleSearchUser.bind(this),
      onAddUserClick: this.handleAddUser.bind(this),
    };
  }

  handleAddUser(e: Event) {
    const button = e.target as HTMLElement;
    const { id } = button.dataset;

    if (id) {
      this.props.onAddUser(parseInt(id, 10));
      this.props.onClose();
    }
  }

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
      <div class="add-user-popup">
        <div class="overlay"></div>
        <div class="modal">
          <div class="modal__content">
            <h3 class="add-user-popup-title">Добавить пользователя</h3>
            <form class="add-user-popup-form">
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
                        className='add-user-popup-button add-user-popup-button_submit'
                  }}}
              {{else}}
                  <ul class="search-result-list">
                      ${this.props.searchResult && this.props.searchResult.map((user: User) => `
                        <li class="search-result-item">
                          {{{ Button label="${user.login}" dataId=${user.id} onClick=onAddUserClick }}}
                        </li>`).join('')}
                  </ul>
              {{/if}}
              {{{ Button 
                    label='Закрыть'
                    type=${ButtonTypes.BUTTON}
                    onClick=onClose 
                    className='add-user-popup-button add-user-popup-button_close' 
              }}}
            </form>
          </div>
        </div>
      </div>
  `;
  }
}

export default AddUserPopup;
