import { getYearMonthDate } from "../../app/utils/date-formatter";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PersonalDetails } from "@/app/types/personal-details";

interface memberPersonalDetailsProps {
  readonly personalDetails: Omit<PersonalDetails, "memberId">[];
}

function MemberPersonalDetails({
  personalDetails,
}: memberPersonalDetailsProps) {
  if (!personalDetails || personalDetails.length === 0) {
    return (
      <>
        <h4>No data to display</h4>
      </>
    );
  }
  return (
    <div className="py-4">
      <h3>Personal Details</h3>
      {personalDetails.map((pd, index) => {
        return (
          <Table key={index}>
            <TableBody>
              <TableRow>
                <TableCell>Full Names</TableCell>
                <TableCell>
                  {pd.firstName} {pd.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nationality</TableCell>
                <TableCell>{pd.nationality}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>National ID</TableCell>
                <TableCell>{pd.nationalIdNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>{pd.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Marital Status</TableCell>
                <TableCell>{pd.maritalStatus}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      })}
    </div>
  );
}

export default MemberPersonalDetails;
