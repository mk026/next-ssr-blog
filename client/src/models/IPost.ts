import { IUser } from "./IUser";
import { ICategory } from "./ICategory";
import { ITag } from "./ITag";

export interface IPost {
  id: number;
  author: IUser;
  title: string;
  description: string;
  content: string;
  category: ICategory;
  tags: ITag[];
  views: number;
  createdAt: Date;
  updatedAt: Date;
}
