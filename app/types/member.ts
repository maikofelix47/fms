import { MemberEmploymentDetail } from "@prisma/client";
import { ContactDetails } from "./contact-details";
import { PersonalDetails } from "./personal-details";

export interface Member {
  id: number;
  MemberPersonalDetail: PersonalDetails[];
  MemberContactDetail: ContactDetails[];
  MemberEmploymentDetail: MemberEmploymentDetail[];
  userId: number;
  isActive: boolean;
  joinDate: Date;
  exitDate: Date;
  exitReason: string;
  voided: boolean;
  createdAt: string;
}
