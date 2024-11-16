import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FAT16 } from "../types/fat-16";

export function FATFSTable({
  data,
  onRowClickCallback,
}: {
  data: { [key: string]: FAT16.Struct };
  onRowClickCallback: (propID: string) => void;
}) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Offset (bytes)</TableHead>
            <TableHead>Size (bytes)</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(data).map(([dataPropKey, dataProp]) => (
            <TableRow
              key={dataProp.id}
              onClick={() => onRowClickCallback(dataPropKey)}
            >
              <TableCell className="font-medium">{dataProp.offset}</TableCell>
              <TableCell>{dataProp.size}</TableCell>
              <TableCell>{dataProp.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
