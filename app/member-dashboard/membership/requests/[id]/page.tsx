import { getMembershipRequest } from "@/app/services/membership.service";
import { FmsPageHeader } from "@/components/fms-page-header";
import { MemberApplication } from "../../../../types/member-application";
import MemberPersonalDetails from "@/components/member-personal-details";
import MemberEmploymentDetails from "@/components/member-employment-details";
interface MembershipRequestProps {
  params: {
    id: string;
  };
}

async function MembershipRequestPage({ params }: MembershipRequestProps) {
  const { id } = params;
  const mR: MemberApplication = await getMembershipRequest(parseInt(id));
  return (
    <>
      <FmsPageHeader>Membership Request Details</FmsPageHeader>
      <MemberPersonalDetails requestDetails={mR} />
      {mR.employed && <MemberEmploymentDetails memberEmploymentDetails={mR} />}
    </>
  );
}

export default MembershipRequestPage;
