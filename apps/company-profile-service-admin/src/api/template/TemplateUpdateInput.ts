import { InputJsonValue } from "../../types";

export type TemplateUpdateInput = {
  content?: InputJsonValue;
  language?: "Option1" | null;
  name?: string | null;
};
