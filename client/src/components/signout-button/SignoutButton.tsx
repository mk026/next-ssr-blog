import { FC } from "react";
import { Button } from "@mui/material";

import { useActions } from "../../hooks/useActions";
import { authActions } from "../../store/slices/authSlice";

import classes from "./SignoutButton.module.scss";

const SignoutButton: FC = () => {
  const { signout } = useActions(authActions);

  return (
    <Button className={classes["signout-btn"]} onClick={signout}>
      Signout
    </Button>
  );
};

export default SignoutButton;
