import MemberPersonalDetails from "./member-personal-details";
import MemberEmploymentDetails from "./member-employment-details";
import MemberContactDetails from "./member-contact-details";
import { MemberDetailsProps } from "@/app/types/member-details";

interface memberDetailsProps {
  readonly memberDetails: MemberDetailsProps;
}

function MemberDetails({ memberDetails }: memberDetailsProps) {
  if (!memberDetails) {
    return <div>No Member Details</div>;
  }
  const { personalDetails, contactDetails, employmentDetails } = memberDetails;
  return (
    <>
      <MemberPersonalDetails personalDetails={personalDetails} />
      <MemberContactDetails contactDetails={contactDetails} />
      <MemberEmploymentDetails employmentDetails={employmentDetails} />
    </>
  );
}

export default MemberDetails;
