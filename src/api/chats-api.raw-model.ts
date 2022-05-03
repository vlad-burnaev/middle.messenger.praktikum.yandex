/* eslint-disable camelcase */
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

export type ChatRaw = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  unread_count: number,
  last_message: Nullable<ChatLastMessage>
}
