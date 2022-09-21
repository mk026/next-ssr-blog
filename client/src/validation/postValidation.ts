import * as yup from "yup";

import { postRules } from "./rules";

export interface PostFormValues {
  title: string;
  content: string;
}

export const postValidationSchema = yup.object({
  title: yup
    .string()
    .min(postRules.title.min)
    .max(postRules.title.max)
    .required(),
  content: yup
    .string()
    .min(postRules.content.min)
    .max(postRules.content.max)
    .required(),
});
