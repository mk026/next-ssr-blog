import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useGetPopularTagsQuery } from "../../../store/api/tagApi";
import TagsList from "../tags-list/TagsList";

const PopularTags: FC = () => {
  const { data } = useGetPopularTagsQuery();

  return (
    <Stack>
      <Typography>Popular Tags</Typography>
      <TagsList tags={data || []} />
    </Stack>
  );
};

export default PopularTags;
