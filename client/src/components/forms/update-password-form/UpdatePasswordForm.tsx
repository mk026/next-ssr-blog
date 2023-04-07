import { FC } from "react";

import { useUpdatePasswordForm } from "../../../hooks/useUpdatePasswordForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const UpdatePasswordForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useUpdatePasswordForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Old password" name="oldPassword" />
      <FormField label="New password" name="password" />
      <FormField label="Confirm password" name="confirmPassword" />
      <LoadingButton isLoading={isLoading}>Update password</LoadingButton>
    </Form>
  );
};

export default UpdatePasswordForm;
