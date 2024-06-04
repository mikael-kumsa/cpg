import { Profile } from "../profile/Profile";

export type Company = {
  createdAt: Date;
  id: string;
  industry: string | null;
  location: string | null;
  name: string | null;
  profiles?: Array<Profile>;
  updatedAt: Date;
  website: string | null;
};
