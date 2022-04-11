import Block from '../../../../utils/Block';
import template from './chat.hbs';
import * as styles from './chat.pcss';
import { Menu } from '../../../../../static/icons/menu';
import { ArrowRight2 } from '../../../../../static/icons/arrow-right-2';
import { Clip } from '../../../../../static/icons/clip';
import MessageGroup from '../MessageGroup';
import { MessageGroupProps } from '../MessageGroup/message-group';
import NewMessagePanel from './NewMessagePanel';

export interface ChatProps {
  avatarSrc: string,
  name: string,
  messageGroups: MessageGroupProps[]
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super({
      ...props, styles, Menu, ArrowRight2, Clip,
    });
  }

  initChildren() {
    const messageGroups = this.props.messageGroups;
    this.children.messageGroup1 = new MessageGroup(messageGroups[0]);
    this.children.messageGroup2 = new MessageGroup(messageGroups[1]);
    this.children.messageGroup3 = new MessageGroup(messageGroups[2]);
    this.children.newMessagePanel = new NewMessagePanel();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
