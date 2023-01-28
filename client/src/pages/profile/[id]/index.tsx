import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

import { useGetUserQuery, userApi } from "../../../store/api/userApi";
import { useRouter } from "next/router";
import wrapper from "../../../store";

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const userId = params?.id as string;
      if (userId) {
        store.dispatch(userApi.endpoints.getUser.initiate(userId));
      }
      await Promise.all(userApi.util.getRunningOperationPromises());
      return { props: {} };
    }
);
