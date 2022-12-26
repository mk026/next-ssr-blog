import { FC } from "react";
import { Tab, Tabs } from "@mui/material";
import { useGetCategoriesQuery } from "../../../store/api/categoryApi";

const PostCategories: FC = () => {
  const { data } = useGetCategoriesQuery();

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <Tabs>
      {data.map((category) => (
        <Tab key={category.id} label={category.title} />
      ))}
    </Tabs>
  );
};

export default PostCategories;
