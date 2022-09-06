import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
