import { IUser } from "./user";
import { ICategory } from "./category";
import { ITag } from "./tag";

export interface IPost {
  id: number;
  author: IUser;
  title: string;
  excerpt: string;
  content: string;
  category: ICategory;
  tags: ITag[];
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface AddPostDto {
  title: string;
  excerpt: string;
  content: string;
  categoryId: number;
}

export interface UpdatePostDto extends Partial<AddPostDto> {}

export interface SearchPostsDto {
  title?: string;
  excerpt?: string;
  content?: string;
  authorId?: number;
  categoryId?: number;
}
