import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const AddPostLink: FC = () => {
  return (
    <Link href="/posts/add">
      <Button>Add new post</Button>
    </Link>
  );
};

export default AddPostLink;
