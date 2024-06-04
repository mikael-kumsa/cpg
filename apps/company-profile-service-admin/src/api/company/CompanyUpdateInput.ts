import { ProfileUpdateManyWithoutCompaniesInput } from "./ProfileUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  industry?: string | null;
  location?: string | null;
  name?: string | null;
  profiles?: ProfileUpdateManyWithoutCompaniesInput;
  website?: string | null;
};
