import { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

import Navbar from "../navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import AuthLinks from "../auth-links";
import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const { signout } = useActions(authActions);

  const signoutHandler = () => signout();

  return (
    <Box component="header">
      <Stack direction="row">
        <Navbar />
        {!isAuth && <AuthLinks />}
        {isAuth && (
          <Button className={classes["signout-btn"]} onClick={signoutHandler}>
            Signout
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
