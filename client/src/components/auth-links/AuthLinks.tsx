import { FC } from "react";
import { Stack } from "@mui/material";
import Link from "next/link";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" className={classes.links}>
      <Link href="/signup">Create Account</Link>
      <Link href="/signin">Signin</Link>
    </Stack>
  );
};

export default AuthLinks;
