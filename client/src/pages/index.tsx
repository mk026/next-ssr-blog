import type { NextPage } from "next";

import CustomHead from "../components/common/custom-head";
import PageTitle from "../components/common/page-title";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Next Blog" />
      <PageTitle>Next Blog</PageTitle>
    </>
  );
};

export default Home;
