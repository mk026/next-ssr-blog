import * as yup from "yup";

export interface CommentFormValues {
  content: string;
}

export const commentValidationSchema = yup.object({
  content: yup.string().required(),
});
