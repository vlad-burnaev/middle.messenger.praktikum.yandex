import Block from '../../../../utils/Block';
import template from './avatar.hbs';
import styles from './avatar.pcss';
import { Image } from '../../../../../static/icons/image';

export class ProfileAvatar extends Block {
  constructor() {
    super({ styles, Image });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
