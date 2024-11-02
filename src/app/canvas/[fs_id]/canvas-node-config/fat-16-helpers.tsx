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
    "border-amber-700 bg-amber-300/20": groupId === "reserved-area",
    "border-yellow-700 bg-yellow-300/20":
      groupId === "fat-1" || groupId === "fat-2",
    "border-green-700 bg-green-300/20": groupId === "root-directory",
    "border-blue-700 bg-blue-300/20": groupId === "data",
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

// This are the cells that have connections for EXT2
const doesItemHaveConnection = (id: string) =>
  id === "reserved-area" || id === "root-directory";

const isTableDataTypeDefined = (
  data: CanvasDTO.Data<CanvasDTO.SizeAndOffset> | CanvasDTO.Data
): data is CanvasDTO.Data<CanvasDTO.SizeAndOffset> => {
  return "offset" in data;
};

export const buildTableBodyContent = (
  data: Array<CanvasDTO.Data<CanvasDTO.SizeAndOffset> | CanvasDTO.Data>
) => {
  return data.map((tableRow) => {
    const cellStyles = generateCanvasTableRowConfig(tableRow.metadata.group);

    if (!isTableDataTypeDefined(tableRow)) {
      const { id, name } = tableRow;
      const hasConnection = doesItemHaveConnection(id);
      return (
        <CanvasTableComponentRow key={id}>
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
    }

    const { id, offset, offsetUnits, size, units, name } = tableRow;

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
