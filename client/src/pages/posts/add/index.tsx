import { NextPage } from "next";

import AddPostForm from "../../../components/forms/add-post-form";
import CustomHead from "../../../components/common/custom-head";
import PageTitle from "../../../components/common/page-title";

const AddPost: NextPage = () => {
  return (
    <>
      <CustomHead title="Create New Post" />
      <PageTitle>Create New Post</PageTitle>
      <AddPostForm />
    </>
  );
};

export default AddPost;
