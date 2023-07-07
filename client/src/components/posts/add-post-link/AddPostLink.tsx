import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

import classes from "./AddPostLink.module.scss";

const AddPostLink: FC = () => {
  return (
    <Link href="/posts/add" className={classes.link}>
      <Button>Add new post</Button>
    </Link>
  );
};

export default AddPostLink;
