
export interface User {
  id: string;
  name: string;
  color: string;
}

export interface Message {
  user: User;
  body: string;
  taggedUserId?: string;
  timestamp: string;
  isFromUser?: boolean
}
