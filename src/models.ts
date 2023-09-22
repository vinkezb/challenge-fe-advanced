
export interface User {
  name: string;
  color: string;
}

export interface Message {
  user: User;
  body: string;
}
