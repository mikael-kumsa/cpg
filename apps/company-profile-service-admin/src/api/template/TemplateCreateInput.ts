import { InputJsonValue } from "../../types";

export type TemplateCreateInput = {
  content?: InputJsonValue;
  language?: "Option1" | null;
  name?: string | null;
};
