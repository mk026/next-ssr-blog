import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";

import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";

const UserMenu: FC = () => {
  const { signout } = useActions(authActions);

  return (
    <Stack>
      <Typography>Profile</Typography>
      <Typography>Posts</Typography>
      <Typography>Bookmarks</Typography>
      <Button onClick={signout}>Signout</Button>
    </Stack>
  );
};

export default UserMenu;
