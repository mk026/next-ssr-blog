import { IUser } from "./user";

export interface IComment {
  id: number;
  author: IUser;
  postId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
