import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next blog</title>
      </Head>
      <Typography variant="h1">Next Blog</Typography>
    </>
  );
};

export default Home;
