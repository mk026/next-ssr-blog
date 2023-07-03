import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IUser } from "../../../models/user";

import classes from "./UserProfileItem.module.scss";

interface UserProfileItemProps {
  user: IUser;
}

const UserProfileItem: FC<UserProfileItemProps> = ({ user }) => {
  return (
    <Card className={classes.profile}>
      <Typography>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <Typography>{user.createdAt}</Typography>
    </Card>
  );
};

export default UserProfileItem;
