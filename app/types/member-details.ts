import { PersonalDetails } from "./personal-details";
import { ContactDetails } from "./contact-details";
import { EmploymentDetails } from "./employment-details";

export interface MemberDetailsProps {
  personalDetails: Omit<PersonalDetails, "memberId">[];
  contactDetails: Omit<ContactDetails, "memberId">[];
  employmentDetails: Omit<EmploymentDetails, "memberId">[];
}
