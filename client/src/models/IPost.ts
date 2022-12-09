import { IUser } from "./IUser";

export interface IPost {
  id: number;
  author: IUser;
  title: string;
  content: string;
}
