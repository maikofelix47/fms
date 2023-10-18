"use client";
import { useEffect, useState } from "react";
import {
  getMembershipRequest,
  approveMembershipRequest,
} from "@/app/services/membership.service";
import { FmsPageHeader } from "@/components/fms-page-header";
import { MemberApplication } from "../../../../types/member-application";
import MemberPersonalDetails from "@/components/member-personal-details";
import MemberEmploymentDetails from "@/components/member-employment-details";
import { Button } from "@/components/ui/button";
interface MembershipRequestProps {
  params: {
    id: string;
  };
}

function MembershipRequestPage({ params }: MembershipRequestProps) {
  const { id } = params;
  const [mR, setmR] = useState<MemberApplication>();

  useEffect(() => {
    getMembershipRequest(parseInt(id)).then((res) => {
      setmR(res);
    });
  }, [id]);

  if (!mR) {
    return <h2>Loading data...</h2>;
  }

  function approveRequest(approval: boolean) {
    approveMembershipRequest(approval, parseInt(id));
  }

  return (
    <>
      <FmsPageHeader>Membership Request Details</FmsPageHeader>
      <MemberPersonalDetails requestDetails={mR} />
      {mR.employed && <MemberEmploymentDetails memberEmploymentDetails={mR} />}

      <div className="py-4">
        <Button variant="destructive" onClick={() => approveRequest(false)}>
          Reject
        </Button>
        <Button onClick={() => approveRequest(true)}>Approve</Button>
      </div>
    </>
  );
}

export default MembershipRequestPage;
