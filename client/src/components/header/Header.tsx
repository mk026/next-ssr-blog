import { FC } from "react";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import AuthLinks from "../auth-links/AuthLinks";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const { signout } = useActions(authActions);

  const signoutHandler = () => signout();

  return (
    <Box component="header">
      <Stack direction="row">
        <Navbar />
        {!isAuth && <AuthLinks />}
        {isAuth && <Button onClick={signoutHandler}>Signout</Button>}
      </Stack>
    </Box>
  );
};

export default Header;
