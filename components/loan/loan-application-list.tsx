import { LoanApplicationRequestSummary } from "@/app/types/loan-application";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { formatLoanApplicationStatus } from "@/app/utils/loan-status";
import { getYearMonthDate } from "@/app/utils/date-formatter";

type LoanApplicationListProps = {
  readonly loanApplicationList: ReadonlyArray<LoanApplicationRequestSummary>;
};

function LoanApplicationList({
  loanApplicationList,
}: LoanApplicationListProps) {
  if (!loanApplicationList || loanApplicationList.length === 0) {
    return <>No data to display...</>;
  }
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Member ID</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loanApplicationList.map((r, index) => {
          return (
            <TableRow key={r.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{getYearMonthDate(String(r.createdAt))}</TableCell>
              <TableCell>{r.memberId}</TableCell>
              <TableCell>{r.loanProduct.name}</TableCell>
              <TableCell>{r.amount}</TableCell>
              <TableCell>{formatLoanApplicationStatus(r.status)}</TableCell>
              <TableCell>
                <Link href={`./applications/${r.id}`}>View</Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default LoanApplicationList;
