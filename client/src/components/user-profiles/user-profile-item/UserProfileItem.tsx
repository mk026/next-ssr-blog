import { FC } from "react";

import { IUser } from "../../../models/user";

interface UserProfileItemProps {
  user: IUser;
}

const UserProfileItem: FC<UserProfileItemProps> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default UserProfileItem;
