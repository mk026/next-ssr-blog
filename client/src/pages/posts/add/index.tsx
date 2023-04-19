import { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import AddPostForm from "../../../components/forms/add-post-form";
import CustomHead from "../../../components/common/custom-head";

const AddPost: NextPage = () => {
  return (
    <>
      <CustomHead title="Create New Post" />
      <Container>
        <Typography variant="h1">Create New Post</Typography>
        <AddPostForm />
      </Container>
    </>
  );
};

export default AddPost;
