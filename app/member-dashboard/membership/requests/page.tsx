"use client";
import { useEffect, useState } from "react";
import { FmsPageHeader } from "@/components/fms-page-header";
import MembersList from "@/components/member-list";
import { getMembershipRequests } from "@/app/services/membership.service";
interface MemberRequest {
  id: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  nationality: string;
  status: string;
}
function MembershipRequestsPage() {
  const [membershipReqs, setMembershipReqs] = useState<MemberRequest[]>([]);
  useEffect(() => {
    getMembershipRequests()
      .then((result) => {
        const { data } = result;
        setMembershipReqs(data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      <FmsPageHeader>Membership Requests</FmsPageHeader>
      <MembersList membershipList={membershipReqs} />
    </>
  );
}

export default MembershipRequestsPage;
