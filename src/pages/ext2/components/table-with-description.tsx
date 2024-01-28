import { useState } from "react";
import type { EXT2 } from "../types/ext2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { superblockData } from "../super-block/data/ext2-super-block";

const TableWithDescription = ({ data }: { data: EXT2.Struct[] }) => {
  // const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true);
  const [selectedSuperblockProp, setSelectedSuperblockProp] =
    useState<EXT2.Struct | null>(data[0]);

  const onRowClick = (data: EXT2.Struct) => {
    setSelectedSuperblockProp(() => data);
    // if (!isDescriptionOpen) setIsDescriptionOpen(true);
  };

  // const onDescriptionCloseClick = () => {
  //   setIsDescriptionOpen(false);
  // };

  return (
    <div className="flex w-full relative space-x-2">
      <Table className="border ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Offset (bytes)</TableHead>
            <TableHead>Size (bytes)</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {superblockData.map((ext2Data) => (
            <TableRow key={ext2Data.id} onClick={() => onRowClick(ext2Data)}>
              <TableCell className="font-medium">{ext2Data.offset}</TableCell>
              <TableCell>{ext2Data.size}</TableCell>
              <TableCell>{ext2Data.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedSuperblockProp !== null && (
        <div className="sticky top-2 h-fit rounded-md border p-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-bold text-lg">
              {selectedSuperblockProp.description}
            </h2>
          </div>
          <div>
            <div>
              <span>
                Offset: <b>{selectedSuperblockProp.offset}</b> bytes
              </span>
            </div>
            <div>
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
