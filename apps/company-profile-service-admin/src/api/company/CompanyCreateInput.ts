import { ProfileCreateNestedManyWithoutCompaniesInput } from "./ProfileCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  industry?: string | null;
  location?: string | null;
  name?: string | null;
  profiles?: ProfileCreateNestedManyWithoutCompaniesInput;
  website?: string | null;
};
