import { FC } from "react";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

import Navbar from "../navbar/Navbar";

const Header: FC = () => {
  return (
    <Box component="header">
      <Stack direction="row">
        <Navbar />
        <Box>
          <Link href="/signup">Create Account</Link>
          <Link href="/signin">Signin</Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
