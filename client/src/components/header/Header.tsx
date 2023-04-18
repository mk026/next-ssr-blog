import { FC } from "react";
import { Box, Stack } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import Navbar from "../navbar";
import SignoutButton from "../signout-button";
import AuthLinks from "../auth-links";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <Box component="header" data-testid="header" classes={classes.header}>
      <Stack direction="row">
        <Navbar />
        {!isAuth ? <AuthLinks /> : <SignoutButton />}
      </Stack>
    </Box>
  );
};

export default Header;
