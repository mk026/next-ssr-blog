import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IUser } from "../../../models/user";

interface UserProfileItemProps {
  user: IUser;
}

const UserProfileItem: FC<UserProfileItemProps> = ({ user }) => {
  return (
    <Card>
      <Typography>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <Typography>{user.createdAt}</Typography>
    </Card>
  );
};

export default UserProfileItem;
