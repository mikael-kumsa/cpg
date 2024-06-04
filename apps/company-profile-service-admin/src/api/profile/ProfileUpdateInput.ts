import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type ProfileUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  format?: "Option1" | null;
  title?: string | null;
};
