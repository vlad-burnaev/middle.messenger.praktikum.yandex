import { ChatProps } from './components/Chat/chat';
import { ChatPreviewProps } from './components/ChatPreview/chat-preview';

export const mainPageData: {
  chatPreviews: ChatPreviewProps[],
  chat: ChatProps
} = {
  chatPreviews: [
    {
      avatarSrc: '',
      name: 'Петя',
      lastMessage: {
        text: 'some text',
        prefix: 'Вы: ',
      },
      meta: {
        time: '15:00',
        newMessagesCount: 2,
      },
    },
    {
      avatarSrc: '',
      name: 'Оля',
      lastMessage: {
        text: 'some text 2',
      },
      meta: {
        time: '16:00',
        newMessagesCount: 2,
      },
    },
    {
      avatarSrc: '',
      name: 'Вася',
      lastMessage: {
        text: 'some text 3',
        prefix: 'Он: ',
      },
      meta: {
        time: '17:00',
      },
    },
  ],
  chat: {
    avatarSrc: '',
    name: 'Василий Вакуленко',
    messageGroups: [
      {
        date: '26 марта',
        type: 'my',
        messages: [
          { text: 'Пап, привет!', meta: { status: 'delivered', time: '15:00' } },
          { text: 'Как дела?', meta: { status: 'sent', time: '14:00' } },
        ],
      },
      {
        date: '27 марта',
        type: 'companion',
        messages: [
          { text: 'Нормально!', meta: { status: 'delivered', time: '17:00' } },
          { text: 'Как в школе?', meta: { status: 'delivered', time: '16:00' } },
        ],
      },
      {
        date: '28 марта',
        type: 'my',
        messages: [
          { text: 'Пап, привет!', meta: { status: 'delivered', time: '15:00' } },
          { text: 'Как дела?', meta: { status: 'delivered', time: '14:00' } },
        ],
      },
    ],
  },
};
