import Block from '../../../../utils/Block';
import template from './chat-preview.hbs';
import * as styles from './chat-preview.pcss';

type Meta = {
  time: string,
  newMessagesCount?: number
}

export interface ChatPreviewProps {
  avatarSrc: string,
  name: string,
  lastMessage: {
    text: string,
    prefix?: string
  },
  meta: Meta
}

export class ChatPreview extends Block {
  constructor(props: ChatPreviewProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
