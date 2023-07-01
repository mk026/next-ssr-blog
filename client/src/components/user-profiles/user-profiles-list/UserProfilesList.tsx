import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { IUser } from "../../../models/user";
import UserProfileItem from "../user-profile-item";

interface UserProfilesListProps {
  users: IUser[];
}

const UserProfilesList: FC<UserProfilesListProps> = ({ users }) => {
  if (!users.length) {
    return <Typography variant="body1">No users found</Typography>;
  }

  return (
    <Stack>
      {users.map((user) => (
        <UserProfileItem key={user.id} user={user} />
      ))}
    </Stack>
  );
};

export default UserProfilesList;
