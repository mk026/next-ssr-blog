import { FC } from "react";
import { Stack } from "@mui/material";

import { ITag } from "../../../models/tag";
import TagItem from "../tag-item";

interface TagListProps {
  tags: ITag[];
}

const TagsList: FC<TagListProps> = ({ tags }) => {
  return (
    <Stack direction="row">
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </Stack>
  );
};

export default TagsList;
