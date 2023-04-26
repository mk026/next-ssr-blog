import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const UserMenu: FC = () => {
  return (
    <Stack>
      <Typography>Profile</Typography>
      <Typography>Posts</Typography>
      <Typography>Bookmarks</Typography>
      <Typography>Signout</Typography>
    </Stack>
  );
};

export default UserMenu;
