import { FC } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

const SigninLink: FC = () => {
  return (
    <Typography variant="body1">
      Already have an account? <Link href="/signin">Signin</Link>
    </Typography>
  );
};

export default SigninLink;
