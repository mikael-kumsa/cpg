import { Company } from "../company/Company";

export type Profile = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  format?: "Option1" | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
