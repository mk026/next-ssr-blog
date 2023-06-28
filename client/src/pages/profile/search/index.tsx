import type { NextPage } from "next";
import { Typography } from "@mui/material";

import CustomHead from "../../../components/common/custom-head";

const SearchProfile: NextPage = () => {
  return (
    <>
      <CustomHead title="Search Profile" />
      <Typography>Search Profile</Typography>
    </>
  );
};

export default SearchProfile;
