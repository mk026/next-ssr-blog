import { FC } from "react";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

import Navbar from "../navbar/Navbar";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";

const Header: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);

  return (
    <Box component="header">
      <Stack direction="row">
        <Navbar />
        {!isAuth && (
          <Box>
            <Link href="/signup">Create Account</Link>
            <Link href="/signin">Signin</Link>
          </Box>
        )}
        {isAuth && <Button>Signout</Button>}
      </Stack>
    </Box>
  );
};

export default Header;
