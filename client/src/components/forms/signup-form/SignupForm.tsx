import { FC } from "react";

import { useSignupForm } from "../../../hooks/useSignupForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SignupForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSignupForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField name="name" label="Name" />
      <FormField name="bio" label="About yourself" multiline />
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <FormField
        name="confirmPassword"
        label="Confirm password"
        type="password"
      />
      <LoadingButton isLoading={isLoading}>Signup</LoadingButton>
    </Form>
  );
};

export default SignupForm;
