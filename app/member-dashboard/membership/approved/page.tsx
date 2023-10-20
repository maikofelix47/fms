import { FmsPageHeader } from "@/components/fms-page-header";
import { getAllApprovedMembers } from "@/app/services/membership.service";
import MembersList from "@/components/member/member-list";
import { Member } from "../../../types/member";

async function MembersListPage() {
  const members: Member[] = await getAllApprovedMembers();
  const membersList = members.map((m: Member) => {
    const pd = m.MemberPersonalDetail[0] || [];
    return {
      createdAt: m.createdAt,
      status: "1",
      ...pd,
      id: m.id,
    };
  });
  return (
    <>
      <FmsPageHeader>Approved Members</FmsPageHeader>
      <MembersList membershipList={membersList} />
    </>
  );
}

export default MembersListPage;
