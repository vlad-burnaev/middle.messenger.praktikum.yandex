export type InterlocutorRaw = {
  first_name: string,
  second_name: string,
  avatar: string,
  email: string,
  login: string,
  phone: string
}

type ChatLastMessage = {
  user: InterlocutorRaw,
  time: string,
  content: string
}

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

export type ChatDTO = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  unread_count: number,
  last_message: Nullable<ChatLastMessage>
}

export const mapChats = (chats: ChatDTO[]): Chat[] => {
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

export type CreateChatRequest = {
  title: string
}

export type AddUserToChatRequest = {
  users: number[],
  chatId: number
}

export type DeleteUserFromChatRequest = {
  users: number[],
  chatId: number
}

export type GetChatUsersRequest = {
  chatId: string
}

export type SearchUserRequest = {
  login: string
}

export type GetChatTokenRequest = {
  chatId: string
}

export type GetChatTokenResponse = {
  token: string
}

export type SendMessageData = {
  message: string
}
