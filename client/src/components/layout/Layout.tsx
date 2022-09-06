import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Navbar from "../navbar/Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
