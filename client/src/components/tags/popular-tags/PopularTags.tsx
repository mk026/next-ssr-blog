import { FC } from "react";
import { Paper, Typography } from "@mui/material";

import { useGetPopularTagsQuery } from "../../../store/api/tagApi";
import TagsList from "../tags-list";

import classes from "./PopularTags.module.scss";

const PopularTags: FC = () => {
  const { data, isLoading } = useGetPopularTagsQuery();

  if (isLoading) {
    return <p>Loading Tags...</p>;
  }

  return (
    <Paper className={classes.tags}>
      <Typography variant="h3" className={classes.title}>
        Popular Tags
      </Typography>
      <TagsList tags={data || []} />
    </Paper>
  );
};

export default PopularTags;
