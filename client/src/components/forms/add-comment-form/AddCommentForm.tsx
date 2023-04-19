import { FC } from "react";

import { useAddCommentForm } from "../../../hooks/useAddCommentForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

import classes from "./AddCommentForm.module.scss";

const AddCommentForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useAddCommentForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className={classes.form}
    >
      <FormField label="Add comment" name="content" />
      <LoadingButton isLoading={isLoading}>Add comment</LoadingButton>
    </Form>
  );
};

export default AddCommentForm;
