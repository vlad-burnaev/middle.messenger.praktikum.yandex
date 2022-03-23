import Block from '../../../../utils/Block';
import template from './chat.hbs';
import styles from './chat.pcss';
import { Menu } from '../../../../../static/icons/menu';
import { ArrowRight2 } from '../../../../../static/icons/arrow-right-2';
import { Clip } from '../../../../../static/icons/clip';
import MessageGroup from '../MessageGroup';

// interface ChatProps {
//   avatarSrc: string,
//   name: string,
//   messageGroups: {
//
//   }[]
// }

export class Chat extends Block {
  constructor() {
    super({
      styles, Menu, ArrowRight2, Clip,
    });
  }

  initChildren() {
    this.children.messageGroup1 = new MessageGroup();
    this.children.messageGroup2 = new MessageGroup();
    this.children.messageGroup3 = new MessageGroup();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
