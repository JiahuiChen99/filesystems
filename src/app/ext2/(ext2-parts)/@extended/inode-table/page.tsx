"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableWithDescription } from "../../components/table-with-description";
import { inodeData } from "./data/ext2-inode";
import { reservedInodesData } from "./data/ext2-reserved-inode";

export default function InodeTable() {
  return (
    <>
      <TableWithDescription data={inodeData} />
      {/* TODO: Create table component */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Offset (bytes)</TableHead>
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
