import * as yup from "yup";

import { postRules } from "./rules";

export interface PostFormValues {
  title: string;
  description: string;
  content: string;
  categoryId: number;
}

export const postValidationSchema = yup.object({
  title: yup
    .string()
    .min(postRules.title.min)
    .max(postRules.title.max)
    .required(),
  description: yup
    .string()
    .min(postRules.description.min)
    .max(postRules.description.max)
    .required(),
  content: yup
    .string()
    .min(postRules.content.min)
    .max(postRules.content.max)
    .required(),
  categoryId: yup.number().required(),
});
