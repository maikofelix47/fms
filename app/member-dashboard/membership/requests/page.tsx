import { FmsPageHeader } from "@/components/fms-page-header";
import MembersList from "@/components/member/member-list";
import { getMembershipRequests } from "@/app/services/membership.service";
import { MemberRequestSummary } from "@/app/types/member-application";

async function MembershipRequestsPage() {
  const membershipReqs: MemberRequestSummary[] = await getMembershipRequests();
  return (
    <>
      <FmsPageHeader>Membership Requests</FmsPageHeader>
      <MembersList membershipList={membershipReqs} />
    </>
  );
}

export default MembershipRequestsPage;
