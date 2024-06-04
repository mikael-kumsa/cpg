import { JsonValue } from "type-fest";

export type Template = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  language?: "Option1" | null;
  name: string | null;
  updatedAt: Date;
};
