import { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import AddPostForm from "../../../components/forms/add-post-form/AddPostForm";

const AddPost: NextPage = () => {
  return (
    <Container>
      <Typography variant="h1">Add Post Page</Typography>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
