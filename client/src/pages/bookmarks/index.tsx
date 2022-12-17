import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

const Bookmarks: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Bookmarks</title>
      </Head>
      <Typography variant="h1">Bookmarks page</Typography>
    </>
  );
};

export default Bookmarks;
