import { FC, useState } from "react";
import { AppBar, Stack } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import Navbar from "../navbar";
import AuthLinks from "../auth-links";
import UserMenuButton from "../user-menu-button";
import UserMenu from "../user-menu";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { isAuth, user } = useAppSelector(getAuthState);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <AppBar data-testid="header" className={classes.header}>
      <Stack direction="row">
        <Navbar />
        {!isAuth ? (
          <AuthLinks />
        ) : (
          <UserMenuButton onClick={toggleMenu} name={user!.name} />
        )}
      </Stack>
      {menuIsOpen && <UserMenu />}
    </AppBar>
  );
};

export default Header;
