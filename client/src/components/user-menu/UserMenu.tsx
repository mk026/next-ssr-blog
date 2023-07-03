import { FC } from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";

import classes from "./UserMenu.module.scss";

const UserMenu: FC = () => {
  const { signout } = useActions(authActions);
  const { user } = useAppSelector(getAuthState);

  return (
    <Stack className={classes.menu}>
      <Link href="/profile">Profile</Link>
      <Link href={`/profile/${user?.id}/posts`}>Posts</Link>
      <Link href={`/profile/${user?.id}/bookmarks`}>Bookmarks</Link>
      <Button onClick={signout}>Signout</Button>
    </Stack>
  );
};

export default UserMenu;
