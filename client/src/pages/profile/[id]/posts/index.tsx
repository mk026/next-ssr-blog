import type { NextPage } from "next";
import { Typography } from "@mui/material";

import CustomHead from "../../../../components/common/custom-head";
import wrapper from "../../../../store";
import { useProfile } from "../../../../hooks/useProfile";
import { userApi } from "../../../../store/api/userApi";

const UserPosts: NextPage = () => {
  const { user } = useProfile();

  return (
    <>
      <CustomHead title={`${user?.name} Posts` || "User Posts"} />
      <Typography variant="h1">Posts of {user?.name}</Typography>
    </>
  );
};

export default UserPosts;

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
