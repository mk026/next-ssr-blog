import { Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

import { ITag } from "../../../models/ITag";

interface TagItemProps {
  tag: ITag;
}

const TagItem: FC<TagItemProps> = ({ tag }) => {
  return (
    <Link href={`/posts/search?tagId=${tag.id}`} passHref>
      <Button component="a">{tag.title}</Button>
    </Link>
  );
};

export default TagItem;
