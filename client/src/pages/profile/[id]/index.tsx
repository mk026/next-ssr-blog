import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { userApi } from "../../../store/api/userApi";
import { useProfile } from "../../../hooks/useProfile";
import CustomHead from "../../../components/common/custom-head";
import wrapper from "../../../store";

const Profile: NextPage = () => {
  const { user } = useProfile();

  return (
    <>
      <CustomHead title={user?.name || "User Profile"} />
      <Typography variant="h1">{user?.name}</Typography>
      <Typography variant="body1">{user?.bio}</Typography>
      <Typography variant="body1">Member since {user?.createdAt}</Typography>
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
