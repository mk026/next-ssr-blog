import { FC } from "react";
import { Button } from "@mui/material";

interface UserMenuButtonProps {
  onClick: () => void;
}

const UserMenuButton: FC<UserMenuButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Open User Menu</Button>;
};

export default UserMenuButton;
