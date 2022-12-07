import { FC } from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" className={classes.links}>
      <Button variant="outlined" className={classes["signup-btn"]}>
        <Link href="/signup">Create Account</Link>
      </Button>
      <Button variant="contained">
        <Link href="/signin">Signin</Link>
      </Button>
    </Stack>
  );
};

export default AuthLinks;
