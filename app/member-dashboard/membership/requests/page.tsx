"use client";
import { useEffect, useState } from "react";
import { FmsPageHeader } from "@/components/fms-page-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMembershipStatus } from "@/app/utils/member-status";
import { getMembershipRequests } from "@/app/services/membership.service";
import { getYearMonthDate } from "@/app/utils/date-formatter";
import Link from "next/link";
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

  const cols = membershipReqs.length > 0 ? Object.keys(membershipReqs[0]) : [];
  return (
    <>
      <FmsPageHeader>Membership Requests</FmsPageHeader>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {membershipReqs.map((r, index) => {
            return (
              <TableRow key={r.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{`${r.firstName} ${r.lastName}`}</TableCell>
                <TableCell>{getYearMonthDate(r.createdAt)}</TableCell>
                <TableCell>{getMembershipStatus(parseInt(r.status))}</TableCell>
                <TableCell>
                  <Link href={`./requests/${r.id}`}>View</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default MembershipRequestsPage;
