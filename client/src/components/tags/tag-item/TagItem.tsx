import { FC } from "react";

import { ITag } from "../../../models/ITag";

interface TagItemProps {
  tag: ITag;
}

const TagItem: FC<TagItemProps> = ({ tag }) => {
  return <div>{tag.title}</div>;
};

export default TagItem;
