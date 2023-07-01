import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useSearchUsersQuery } from "../../../store/api/userApi";
import CustomHead from "../../../components/common/custom-head";
import PageTitle from "../../../components/common/page-title";
import SearchUserForm from "../../../components/forms/search-user-form";
import UserProfilesList from "../../../components/user-profiles/user-profiles-list";

const SearchProfile: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useSearchUsersQuery({
    name: router.query.name as string,
  });

  return (
    <>
      <CustomHead title="Search Profile" />
      <PageTitle>Search Profile</PageTitle>
      <SearchUserForm />
      {isLoading && <p>Loading...</p>}
      <UserProfilesList users={data || []} />
    </>
  );
};

export default SearchProfile;
