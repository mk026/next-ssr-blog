import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

import { ITag } from "../../../models/tag";

import classes from "./TagItem.module.scss";

interface TagItemProps {
  tag: ITag;
}

const TagItem: FC<TagItemProps> = ({ tag }) => {
  return (
    <Link href={`/posts/search?tagId=${tag.id}`} passHref>
      <Button className={classes.tag} component="a">
        {tag.title}
      </Button>
    </Link>
  );
};

export default TagItem;
