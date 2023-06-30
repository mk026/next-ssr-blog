import { FC } from "react";
import { Stack } from "@mui/material";

import { IUser } from "../../../models/user";
import UserProfileItem from "../user-profile-item";

interface UserProfilesListProps {
  users: IUser[];
}

const UserProfilesList: FC<UserProfilesListProps> = ({ users }) => {
  return (
    <Stack>
      {users.map((user) => (
        <UserProfileItem key={user.id} user={user} />
      ))}
    </Stack>
  );
};

export default UserProfilesList;
