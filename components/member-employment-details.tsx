import { MemberApplication } from "@/app/types/member-application";
import { getYearMonthDate } from "../app/utils/date-formatter";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface memberEmploymentDetailsProps {
  readonly memberEmploymentDetails: Pick<
    MemberApplication,
    | "employer"
    | "dateOfEmployment"
    | "station"
    | "jobTitle"
    | "grossMonthlyIncome"
  >;
}

function MemberEmploymentDetails({
  memberEmploymentDetails,
}: memberEmploymentDetailsProps) {
  return (
    <>
      <h3>Employment Details</h3>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Employer</TableCell>
            <TableCell>{memberEmploymentDetails.employer}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>{memberEmploymentDetails.jobTitle}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date of Employment</TableCell>
            <TableCell>
              {getYearMonthDate(memberEmploymentDetails.dateOfEmployment)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gross Salary</TableCell>
            <TableCell>{memberEmploymentDetails.grossMonthlyIncome}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Station</TableCell>
            <TableCell>{memberEmploymentDetails.station}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default MemberEmploymentDetails;
