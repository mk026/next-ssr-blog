import { FC } from "react";

import { useUpdateProfileForm } from "../../../hooks/useUpdateProfileForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const UpdateProfileForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useUpdateProfileForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Name" name="name" />
      <FormField label="About yourself" name="bio" multiline />
      <FormField label="Email" name="email" />
      <LoadingButton isLoading={isLoading}>Update profile</LoadingButton>
    </Form>
  );
};

export default UpdateProfileForm;
