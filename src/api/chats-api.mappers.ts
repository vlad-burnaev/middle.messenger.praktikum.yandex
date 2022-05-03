import { ChatRaw, InterlocutorRaw } from './chats-api.raw-model';

const mapInterlocutor = (data: InterlocutorRaw): Interlocutor => {
  return {
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    avatar: data.avatar,
    phone: data.phone,
    email: data.email,
  };
};

export const mapChats = (chats: ChatRaw[]): Chat[] => {
  return chats.map((chat) => {
    return {
      id: chat.id,
      title: chat.title,
      avatar: chat.avatar,
      unreadCount: chat.unread_count,
      lastMessage: chat.last_message ? {
        user: mapInterlocutor(chat.last_message.user),
        time: new Date(chat.last_message.time),
        content: chat.last_message.content,
      } : null,
    };
  });
};
