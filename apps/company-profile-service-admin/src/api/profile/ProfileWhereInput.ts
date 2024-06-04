import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  format?: "Option1";
  id?: StringFilter;
  title?: StringNullableFilter;
};
