import { getYearMonthDate } from "../../app/utils/date-formatter";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { EmploymentDetails } from "../../app/types/employment-details";

interface memberEmploymentDetailsProps {
  readonly employmentDetails: Omit<EmploymentDetails, "memberId">[];
}

function MemberEmploymentDetails({
  employmentDetails,
}: memberEmploymentDetailsProps) {
  if (!employmentDetails) {
    return (
      <>
        <h4>No data to display</h4>
      </>
    );
  }
  return (
    <div className="py-4">
      <h3>Employment Details</h3>
      {employmentDetails.map((ed, index) => {
        return (
          <Table key={index}>
            <TableBody>
              <TableRow>
                <TableCell>Employer</TableCell>
                <TableCell>{ed.employer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>{ed.jobTitle}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Date of Employment</TableCell>
                <TableCell>
                  {getYearMonthDate(String(ed.dateOfEmployment))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gross Monthly Salary</TableCell>
                <TableCell>KES {ed.grossMonthlyIncome}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Station</TableCell>
                <TableCell>{ed.station}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      })}
    </div>
  );
}

export default MemberEmploymentDetails;
