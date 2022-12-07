import { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Tab } from "@mui/material";

interface TabLinkProps extends LinkProps {
  value: any;
  label: ReactNode;
}

const TabLink: FC<TabLinkProps> = ({ value, label, ...linkProps }) => {
  return (
    <Link {...linkProps} passHref>
      <Tab component="a" label={label} value={value} />
    </Link>
  );
};

export default TabLink;
