import type { NextPage } from "next";
import { Typography } from "@mui/material";

import CustomHead from "../../components/common/custom-head";

const Profile: NextPage = () => {
  return (
    <>
      <CustomHead title="My Profile" />
      <Typography variant="h1">Profile</Typography>
    </>
  );
};

export default Profile;
