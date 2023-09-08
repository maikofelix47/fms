"use client";
import { useEffect, useState } from "react";
import { FmsPageHeader } from "@/components/fms-page-header";
import FmsTable from "@/components/fms-table";
import { getMembershipRequests } from "@/app/services/membership.service";
function MembershipRequestsPage() {
  const [membershipReqs, setMembershipReqs] = useState([]);
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

  const cols = membershipReqs.length > 0 ? Object.keys(membershipReqs[0]) : [];
  return (
    <>
      <FmsPageHeader>Membership Requests</FmsPageHeader>
      <FmsTable caption="Requests" columns={cols} data={membershipReqs} />
    </>
  );
}

export default MembershipRequestsPage;
