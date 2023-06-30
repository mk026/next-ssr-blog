import type { NextPage } from "next";

import CustomHead from "../../../components/common/custom-head";
import PageTitle from "../../../components/common/page-title";
import SearchUserForm from "../../../components/forms/search-user-form";

const SearchProfile: NextPage = () => {
  return (
    <>
      <CustomHead title="Search Profile" />
      <PageTitle>Search Profile</PageTitle>
      <SearchUserForm />
    </>
  );
};

export default SearchProfile;
