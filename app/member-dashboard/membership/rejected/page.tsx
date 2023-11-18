import { FmsPageHeader } from "@/components/fms-page-header";
import { getAllRejectedMembers } from "@/app/services/membership.service";
import MembersList from "@/components/member/member-list";
import { MemberRequestSummary } from "../../../types/member-application";

async function MembersListPage() {
  const members: MemberRequestSummary[] = await getAllRejectedMembers();
  return (
    <>
      <FmsPageHeader>Rejected Members</FmsPageHeader>
      <MembersList membershipList={members} />
    </>
  );
}

export default MembersListPage;
