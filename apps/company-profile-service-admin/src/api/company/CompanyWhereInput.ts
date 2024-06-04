import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  website?: StringNullableFilter;
};
