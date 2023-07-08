import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { useGetPopularTagsQuery } from "../../../store/api/tagApi";
import TagsList from "../tags-list";

import classes from "./PopularTags.module.scss";

const PopularTags: FC = () => {
  const { data, isLoading } = useGetPopularTagsQuery();

  if (isLoading) {
    return <p>Loading Tags...</p>;
  }

  return (
    <Stack className={classes.tags}>
      <Typography>Popular Tags</Typography>
      <TagsList tags={data || []} />
    </Stack>
  );
};

export default PopularTags;
