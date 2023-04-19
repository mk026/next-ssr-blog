import { FC } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

const SignupLink: FC = () => {
  return (
    <Typography variant="body1">
      Don t have an account? <Link href="/signup">Signup</Link>
    </Typography>
  );
};

export default SignupLink;
