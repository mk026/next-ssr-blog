import { IUser } from "./IUser";

export interface IComment {
  id: number;
  author: IUser;
  postId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
