"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { inodeData, reservedInodesData } from "@/domain/ext-2";
import { TableWithDescription } from "../../components/table-with-description";

export default function InodeTable() {
  return (
    <>
      <TableWithDescription data={inodeData} />
      {/* TODO: Create table component */}
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
            {reservedInodesData.map((reservedInodes) => (
              <TableRow key={reservedInodes.id}>
                <TableCell className="font-medium">
                  {reservedInodes.name}
                </TableCell>
                <TableCell>{reservedInodes.value}</TableCell>
                <TableCell>{reservedInodes.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
