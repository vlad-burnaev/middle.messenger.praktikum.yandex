import Block from '../../../../core/Block';
import template from './chat-previews.hbs';
import * as styles from './chat-previews.pcss';

type ChatPreviewMeta = {
  time: string,
  newMessagesCount?: number
}

export type ChatPreview = {
  avatarSrc: string,
  name: string,
  lastMessage: {
    text: string,
    prefix?: string
  },
  meta: ChatPreviewMeta
  styles: any
}

export interface ChatPreviewsProps {
  previews: ChatPreview[];
}

// todo - костыль с styles для hbs #each
export class ChatPreviews extends Block {
  constructor(props: ChatPreviewsProps) {
    super({
      previews: props.previews.map((p) => {
        return {
          ...p,
          styles,
        };
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
