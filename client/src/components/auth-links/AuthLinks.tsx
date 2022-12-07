import { FC } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

const AuthLinks: FC = () => {
  return (
    <Box>
      <Link href="/signup">Create Account</Link>
      <Link href="/signin">Signin</Link>
    </Box>
  );
};

export default AuthLinks;
