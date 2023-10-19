import { getApprovedMemberDetails } from "@/app/services/membership.service";
import { FmsPageHeader } from "@/components/fms-page-header";

interface ApprovedMemberDetailsProps {
  params: {
    id: string;
  };
}

async function ApprovedMemberDetails({ params }: ApprovedMemberDetailsProps) {
  const { id } = params;
  console.log({ id });
  const member = await getApprovedMemberDetails(parseInt(id));
  return (
    <>
      <FmsPageHeader>Member Details</FmsPageHeader>
    </>
  );
}

export default ApprovedMemberDetails;
