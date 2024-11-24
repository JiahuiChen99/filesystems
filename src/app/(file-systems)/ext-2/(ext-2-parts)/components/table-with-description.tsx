import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRightFromLine, Cpu, X } from "lucide-react";
import { useState } from "react";
import type { EXT2 } from "../../types/ext-2";

const TableWithDescription = ({ data }: { data: EXT2.Struct[] }) => {
  const [selectedSuperblockProp, setSelectedSuperblockProp] =
    useState<EXT2.Struct | null>(data[0]);

  const onRowClick = (data: EXT2.Struct) => {
    setSelectedSuperblockProp(() => data);
  };

  const onDescriptionCloseClick = () => {
    setSelectedSuperblockProp(null);
  };

  return (
    <div className="flex w-full relative space-x-2">
      <div className="border rounded-lg w-full h-fit">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Offset (bytes)</TableHead>
              <TableHead>Size (bytes)</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ext2Data) => (
              <TableRow key={ext2Data.id} onClick={() => onRowClick(ext2Data)}>
                <TableCell className="font-medium">{ext2Data.offset}</TableCell>
                <TableCell>{ext2Data.size}</TableCell>
                <TableCell>{ext2Data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedSuperblockProp !== null && (
        <div className="sticky top-2 h-fit rounded-md border p-4 space-y-3">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-bold text-lg">
              {selectedSuperblockProp.description}
            </h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={onDescriptionCloseClick}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex gap-x-4">
              <ArrowRightFromLine />
              <span>
                Offset: <b>{selectedSuperblockProp.offset}</b> bytes
              </span>
            </div>
            <div className="flex gap-x-4">
              <Cpu />
              <span>
                Size: <b>{selectedSuperblockProp.size}</b> bytes
              </span>
            </div>
          </div>
          {selectedSuperblockProp.info}
        </div>
      )}
    </div>
  );
};

export { TableWithDescription };
