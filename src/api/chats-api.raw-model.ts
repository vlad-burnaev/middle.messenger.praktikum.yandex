/* eslint-disable camelcase */
export type InterlocutorRaw = {
  first_name: string,
  second_name: string,
  avatar: string,
  email: string,
  login: string,
  phone: string
}

export type ChatRaw = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: InterlocutorRaw,
    time: string,
    content: string
  }
}
