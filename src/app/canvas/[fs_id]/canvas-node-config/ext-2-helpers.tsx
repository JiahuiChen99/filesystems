import {
  CanvasTableComponentCell,
  CanvasTableComponentHead,
  CanvasTableComponentRow,
} from "@/components/canvas/table";
import { CanvasDTO } from "@/dto/canvas";
import { cn } from "@/lib/utils";
import { Handle, Position } from "@xyflow/react";

// Gets an item and generates a compliant object that canvas-table-node will use
const generateCanvasTableRowConfig = (groupId: string): string => {
  const cellStyles = cn({
    "border-amber-700 bg-amber-300/20": groupId === "boot-record",
    "border-yellow-700 bg-yellow-300/20": groupId === "block-group-descriptor",
    "border-green-700 bg-green-300/20":
      groupId === "block-group" ||
      groupId === "inode-table" ||
      groupId === "inode-bitmap" ||
      groupId === "block-bitmap" ||
      groupId === "data-blocks",
    "border-blue-700 bg-blue-300/20": groupId === "superblock",
  });
  return cellStyles;
};

/**
 * Builds a CanvasTableComponentHeader component with the headers
 */
export const buildTableHeadersContent = (headers: Array<string>) => {
  return headers.map((header) => (
    <CanvasTableComponentHead key={header}>{header}</CanvasTableComponentHead>
  ));
};

const CanvasTableNodeSection = ({ item }: { item: CanvasDTO.TableSection }) => (
  <CanvasTableComponentRow key={item.sectionTitle}>
    <CanvasTableComponentCell className="font-medium" colSpan={3}>
      {item.sectionTitle}
    </CanvasTableComponentCell>
  </CanvasTableComponentRow>
);

// TODO: Put this function inside common
const isTableSection = (
  tableRowData: CanvasDTO.TableSection | CanvasDTO.Data
): tableRowData is CanvasDTO.TableSection => {
  return "sectionTitle" in tableRowData;
};

// This are the cells that have connections for EXT2
const doesItemHaveConnection = (id: string) =>
  id === "superblock" ||
  id === "block group descriptor table" ||
  id === "inode table" ||
  id === "inode bitmap" ||
  id === "block bitmap";

export const buildTableBodyContent = (
  data: Array<CanvasDTO.Data<CanvasDTO.SizeAndOffset> | CanvasDTO.TableSection>
) => {
  return data.map((tableRow) => {
    if (isTableSection(tableRow)) {
      return (
        <CanvasTableNodeSection key={tableRow.sectionTitle} item={tableRow} />
      );
    }

    const { id, offset, offsetUnits, size, units, name, metadata } = tableRow;

    const cellStyles = generateCanvasTableRowConfig(metadata.group);
    const hasConnection = doesItemHaveConnection(id);

    return (
      <CanvasTableComponentRow key={id}>
        <CanvasTableComponentCell className={cellStyles}>
          {`${offsetUnits} ${offset}`}
        </CanvasTableComponentCell>
        <CanvasTableComponentCell className={cellStyles}>
          {`${size} ${units}`}
        </CanvasTableComponentCell>
        <CanvasTableComponentCell className={cn("relative", cellStyles)}>
          {hasConnection && (
            <Handle
              id={id}
              position={Position.Right}
              type="source"
              isConnectable={false}
            />
          )}
          {name}
        </CanvasTableComponentCell>
      </CanvasTableComponentRow>
    );
  });
};
