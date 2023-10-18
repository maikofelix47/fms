import { MemberApplication } from "@/app/types/member-application";
import { getYearMonthDate } from "../app/utils/date-formatter";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface membershipReuqestDetailsProps {
  readonly requestDetails: MemberApplication;
}

function MemberPersonalDetails({
  requestDetails,
}: membershipReuqestDetailsProps) {
  return (
    <>
      <h3>Personal Details</h3>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Full Names</TableCell>
            <TableCell>
              {requestDetails.firstName} {requestDetails.lastName}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nationality</TableCell>
            <TableCell>{requestDetails.nationality}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>National ID</TableCell>
            <TableCell>{requestDetails.nationalIdNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DOB</TableCell>
            <TableCell>{getYearMonthDate(requestDetails.dob)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell>{requestDetails.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Marital Status</TableCell>
            <TableCell>{requestDetails.maritalStatus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone No</TableCell>
            <TableCell>{requestDetails.phoneNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country of Residence</TableCell>
            <TableCell>{requestDetails.countryOfResidence}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>County of Residence</TableCell>
            <TableCell>{requestDetails.countyOfResidence}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Estate</TableCell>
            <TableCell>{requestDetails.estate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>House No</TableCell>
            <TableCell>{requestDetails.houseNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Employed</TableCell>
            <TableCell>{requestDetails.employed}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default MemberPersonalDetails;
