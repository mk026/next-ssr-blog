import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Header from "../header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
