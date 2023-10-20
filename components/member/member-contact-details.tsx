import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ContactDetails } from "@/app/types/contact-details";

interface memberContactDetailsProps {
  readonly contactDetails: Omit<ContactDetails, "memberId">[];
}

function MemberContactDetails({ contactDetails }: memberContactDetailsProps) {
  if (!contactDetails) {
    return (
      <>
        <h4>No data to display</h4>
      </>
    );
  }
  return (
    <div className="py-4">
      <h3>Contact Details</h3>
      {contactDetails.map((cd, index) => {
        return (
          <Table key={index}>
            <TableBody>
              <TableRow>
                <TableCell>Phone No</TableCell>
                <TableCell>{cd.phoneNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Country of Residence</TableCell>
                <TableCell>{cd.countryOfResidence}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>County of Residence</TableCell>
                <TableCell>{cd.countyOfResidence}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Estate</TableCell>
                <TableCell>{cd.estate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>House No</TableCell>
                <TableCell>{cd.houseNo}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      })}
    </div>
  );
}

export default MemberContactDetails;
