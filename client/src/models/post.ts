import { IUser } from "./user";
import { ICategory } from "./category";
import { ITag } from "./tag";

export interface IPost {
  id: number;
  author: IUser;
  title: string;
  description: string;
  content: string;
  category: ICategory;
  tags: ITag[];
  views: number;
  createdAt: string;
  updatedAt: string;
}
