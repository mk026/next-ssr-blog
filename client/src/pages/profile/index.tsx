import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <Typography variant="h1">Profile page</Typography>
    </>
  );
};

export default Profile;
