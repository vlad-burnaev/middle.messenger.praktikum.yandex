import Block from '../../../../core/Block';
import './createChatPopup.scss';
import { InputType, InputVariants } from '../../../../components/input/input';
import { ButtonTypes } from '../../../../components/button/button';

interface ICreateChatPopupProps {
  onClose: () => void,
  onSubmit: (title: string) => void,
}

class CreateChatPopup extends Block<ICreateChatPopupProps> {
  protected getStateFromProps() {
    this.state = {
      onCreateChatClick: this.handleCreateChat.bind(this),
    };
  }

  handleCreateChat(e: Event) {
    e.preventDefault();

    const nameInput = this.refs.name as HTMLInputElement;

    if (nameInput) {
      this.props.onSubmit(nameInput.value);
      this.props.onClose();
    }
  }

  render() {
    // language=hbs
    return `
      <div class="create-chat">
          <div class="overlay" ></div>
          <div class="modal">
              <div class="modal__content">
                  <h3 class="create-chat-title">Создать новый чат</h3>
                  <form class="create-chat-form">
                      {{{ Input 
                            type=${InputType.TEXT} 
                            ref="name" 
                            variant=${InputVariants.CLASSIC} 
                            placeholder='Название' 
                      }}}
                      {{{ Button 
                            label='Создать' 
                            type=${ButtonTypes.SUBMIT} 
                            onClick=onCreateChatClick
                            className='create-chat-button create-chat-button_submit' 
                      }}}
                      {{{ Button 
                            label='Закрыть'
                            type=${ButtonTypes.BUTTON}
                            onClick=onClose 
                            className='create-chat-button create-chat-button_close' 
                      }}}
                  </form>
              </div>
          </div>
      </div>
  `;
  }
}

export default CreateChatPopup;
