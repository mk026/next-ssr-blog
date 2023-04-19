import { Typography } from "@mui/material";
import type { NextPage } from "next";
import CustomHead from "../components/common/custom-head/CustomHead";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Next Blog" />
      <Typography variant="h1">Next Blog</Typography>
    </>
  );
};

export default Home;
