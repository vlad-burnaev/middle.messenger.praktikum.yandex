import Block from '../../../../utils/Block';
import template from './chat-preview.hbs';
import styles from './chat-preview.pcss';

export interface ChatPreviewProps {
  avatarSrc: string,
  name: string,
  lastMessage: {
    text: string,
    prefix?: string
  },
  meta: {
    time: string,
    newMessagesCount?: number
  }
}

export class ChatPreview extends Block {
  constructor(props: ChatPreviewProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
