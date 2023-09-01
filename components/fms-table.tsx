import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FmsTableProps {
  caption: string;
  columns: string[];
  data: any[];
}

function FmsTable({ caption, columns, data }: FmsTableProps) {
  if (data.length === 0) {
    return <h2>No Data to display</h2>;
  }
  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((c, index) => {
            return <TableHead key={index}>{c}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d, index) => {
          const cellData = Object.values(d);
          return (
            <TableRow key={index}>
              {cellData.map((cd: any, index: number) => {
                return <TableCell key={index}>{cd}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default FmsTable;
