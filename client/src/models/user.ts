export interface IUser {
  id: number;
  name: string;
  bio: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
