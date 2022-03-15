import Block from '../../../../utils/Block';
import template from './avatar.hbs';
import styles from './avatar.pcss';

export class ProfileAvatar extends Block {
  constructor() {
    super({ styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
