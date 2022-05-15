import avatarPlaceholder from '../../../static/icons/image.svg';
import './avatar.scss';
import Block from '../../core/Block';

interface IAvatarProps {
  imageUrl?: string,
  placeholder: string,
  onChange: () => void;
}

class Avatar extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
      <form class='avatar'>
        <label for='avatar__file-upload' class='avatar__label' />
        {{{ Input 
            type="file"
            alt="Выберите аватарку"
            id="avatar__file-upload"
            className="avatar__file-upload"
            accept="image/*"
            name="avatar"
            onChange=onChange
        }}}
        <div class='avatar__image-wrap'>
          {{#if imageUrl}}
            <img class='avatar__image' src={{imageUrl}} />
          {{else}}
            <img class='avatar__image avatar__image-placeholder' src=${avatarPlaceholder} />
          {{/if}}
        </div>
      </form>
  `;
  }
}

export default Avatar;
