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
import { getYearMonthDate } from "@/app/utils/date-formatter";
import Link from "next/link";

interface MemberList {
  id: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface MembersListProps {
  membershipList: MemberList[];
}

type viewUrl = "requests" | "approved";

function MembersList({ membershipList }: MembersListProps) {
  function getViewUrl(status: number): viewUrl {
    let url: viewUrl = "requests";
    if (status === 0) {
      url = "requests";
    }
    if (status === 1) {
      url = "approved";
    }

    return url;
  }
  return (
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
        {membershipList.map((r, index) => {
          return (
            <TableRow key={r.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{`${r.firstName} ${r.lastName}`}</TableCell>
              <TableCell>{getYearMonthDate(r.createdAt)}</TableCell>
              <TableCell>{getMembershipStatus(parseInt(r.status))}</TableCell>
              <TableCell>
                <Link href={`./${getViewUrl(parseInt(r.status))}/${r.id}`}>
                  View
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default MembersList;
