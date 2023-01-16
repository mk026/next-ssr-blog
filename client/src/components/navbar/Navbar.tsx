import { FC } from "react";
import { useRouter } from "next/router";
import { Tabs } from "@mui/material";

import TabLink from "../common/tab-link";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <Tabs component="nav" value={pathname}>
      <TabLink value="/posts" label="Posts" href="/posts" />
      <TabLink value="/profile" label="Profile" href="/profile" />
    </Tabs>
  );
};

export default Navbar;
