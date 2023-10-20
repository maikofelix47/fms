"use client";
import { useEffect, useState } from "react";
import {
  getMembershipRequest,
  approveMembershipRequest,
} from "@/app/services/membership.service";
import { FmsPageHeader } from "@/components/fms-page-header";
import { MemberApplication } from "../../../../types/member-application";
import MemberDetails from "@/components/member/member-details";
import { Button } from "@/components/ui/button";
import { MemberDetailsProps } from "@/app/types/member-details";
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

  const memberDetails: MemberDetailsProps = {
    personalDetails: [{ ...mR }],
    contactDetails: [
      {
        ...mR,
      },
    ],
    employmentDetails: [
      {
        ...mR,
      },
    ],
  };

  function approveRequest(approval: boolean) {
    approveMembershipRequest(approval, parseInt(id));
  }


  return (
    <>
      <FmsPageHeader>Membership Request Details</FmsPageHeader>
      <MemberDetails memberDetails={memberDetails} />
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
