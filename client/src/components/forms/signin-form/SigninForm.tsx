import { FC } from "react";

import { useSigninForm } from "../../../hooks/useSigninForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SigninForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSigninForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <LoadingButton isLoading={isLoading}>Signin</LoadingButton>
    </Form>
  );
};

export default SigninForm;
