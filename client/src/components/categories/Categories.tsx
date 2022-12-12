import { FC } from "react";
import { Tab, Tabs } from "@mui/material";

const Categories: FC = () => {
  return (
    <Tabs>
      <Tab label="Category 1" />
      <Tab label="Category 2" />
      <Tab label="Category 3" />
    </Tabs>
  );
};

export default Categories;
