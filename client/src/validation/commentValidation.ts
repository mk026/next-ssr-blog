import * as yup from "yup";

import { commentRules } from "./rules";

export interface CommentFormValues {
  content: string;
}

export const commentValidationSchema = yup.object({
  content: yup
    .string()
    .min(commentRules.content.min)
    .max(commentRules.content.max)
    .required(),
});
