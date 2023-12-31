import { FmsPageHeader } from "@/components/fms-page-header";
import { getAllApprovedMembers } from "@/app/services/membership.service";
import MembersList from "@/components/member/member-list";
import { MemberRequestSummary } from "../../../types/member-application";

async function MembersListPage() {
  const approvedReqs: MemberRequestSummary[] = await getAllApprovedMembers();
  return (
    <>
      <FmsPageHeader>Approved Members</FmsPageHeader>
      <MembersList membershipList={approvedReqs} />
    </>
  );
}

export default MembersListPage;
