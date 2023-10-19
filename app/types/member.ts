import { PersonalDetails } from "./personal-details";

export interface Member {
  id: number;
  MemberPersonalDetail: PersonalDetails[];
  userId: number;
  isActive: boolean;
  joinDate: Date;
  exitDate: Date;
  exitReason: string;
  voided: boolean;
  createdAt: string;
}
