import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Tab, Tabs } from "@mui/material";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <Tabs component="nav" value={pathname}>
      <Tab label="Rooms" value="/rooms" component={Link} href="/rooms" />
      <Tab label="Profile" value="/profile" component={Link} href="/profile" />
    </Tabs>
  );
};

export default Navbar;
