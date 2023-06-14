import { Stack, Typography } from "@mui/material";
import { FC } from "react";

import { useGetPopularTagsQuery } from "../../../store/api/tagApi";
import TagsList from "../tags-list";

const PopularTags: FC = () => {
  const { data, isLoading } = useGetPopularTagsQuery();

  if (isLoading) {
    return <p>Loading Tags...</p>;
  }

  return (
    <Stack>
      <Typography>Popular Tags</Typography>
      <TagsList tags={data || []} />
    </Stack>
  );
};

export default PopularTags;
