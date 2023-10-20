import { getApprovedMemberDetails } from "@/app/services/membership.service";
import { FmsPageHeader } from "@/components/fms-page-header";
import { Member } from "../../../../types/member";
import { MemberDetailsProps } from "@/app/types/member-details";
import MemberDetails from "@/components/member/member-details";

interface ApprovedMemberDetailsProps {
  params: {
    id: string;
  };
}

async function ApprovedMemberDetails({ params }: ApprovedMemberDetailsProps) {
  const { id } = params;
  const member: Member = await getApprovedMemberDetails(parseInt(id));

  const { MemberPersonalDetail, MemberContactDetail, MemberEmploymentDetail } =
    member;

  const memberDetails: MemberDetailsProps = {
    personalDetails: MemberPersonalDetail,
    contactDetails: MemberContactDetail,
    employmentDetails: MemberEmploymentDetail,
  };
  return (
    <>
      <FmsPageHeader>Member Details</FmsPageHeader>
      <MemberDetails memberDetails={memberDetails} />
    </>
  );
}

export default ApprovedMemberDetails;
