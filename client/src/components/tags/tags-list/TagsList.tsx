import { FC } from "react";

import { ITag } from "../../../models/tag";
import TagItem from "../tag-item";

interface TagListProps {
  tags: ITag[];
}

const TagsList: FC<TagListProps> = ({ tags }) => {
  return (
    <ul>
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </ul>
  );
};

export default TagsList;
