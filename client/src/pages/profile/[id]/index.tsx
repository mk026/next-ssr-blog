import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

import { useGetUserQuery } from "../../../store/api/userApi";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const { data: user } = useGetUserQuery(userId);

  return (
    <>
      <Head>
        <title>{user?.name || "User Profile"}</title>
      </Head>
      <Typography variant="h1">{user?.name}</Typography>
      <Typography variant="body1">{user?.bio}</Typography>
    </>
  );
};

export default Profile;
