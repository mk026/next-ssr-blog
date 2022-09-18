import * as yup from "yup";

export interface PostFormValues {
  title: string;
  content: string;
}

export const postValidationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
});
