import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  language?: "Option1";
  name?: StringNullableFilter;
};
