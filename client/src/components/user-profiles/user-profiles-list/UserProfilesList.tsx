import { FC } from "react";

import { IUser } from "../../../models/user";
import UserProfileItem from "../user-profile-item";

interface UserProfilesListProps {
  users: IUser[];
}

const UserProfilesList: FC<UserProfilesListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserProfileItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserProfilesList;
