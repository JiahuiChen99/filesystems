import { CanvasDTO } from "@/dto/canvas";
import { cn } from "@/lib/utils";
import { Handle, NodeProps, Position } from "@xyflow/react";
import React from "react";
import {
  CanvasTableComponent,
  CanvasTableComponentBody,
  CanvasTableComponentCell,
  CanvasTableComponentHead,
  CanvasTableComponentHeader,
  CanvasTableComponentRow,
} from "./table";

export const CanvasTableNode = ({ data }: NodeProps<CanvasDTO.TableNode>) => {
  const inodeRows = React.useMemo(
    () =>
      data.tableData.map((item, index) => {
        if (!("id" in item))
          return (
            <CanvasTableComponentRow key={item.sectionTitle}>
              <CanvasTableComponentCell className="font-medium" colSpan={3}>
                {item.sectionTitle}
              </CanvasTableComponentCell>
            </CanvasTableComponentRow>
          );

        const borderStyles = cn({
          "border-amber-700 bg-amber-300/20":
            item.metadata.group === "boot-record" ||
            item.metadata.group === "reserved-area",
          "border-yellow-700 bg-yellow-300/20":
            item.metadata.group === "block-group-descriptor" ||
            item.metadata.group === "fat-1" ||
            item.metadata.group === "fat-2",
          "border-green-700 bg-green-300/20":
            item.metadata.group === "block-group" ||
            item.metadata.group === "inode-table" ||
            item.metadata.group === "inode-bitmap" ||
            item.metadata.group === "block-bitmap" ||
            item.metadata.group === "data-blocks" ||
            item.metadata.group === "root-directory",
          "border-blue-700 bg-blue-300/20":
            item.metadata.group === "superblock" ||
            item.metadata.group === "data",
        });

        const size = `${item.size} ${item.units || ""}`;
        const offset = `${item.offsetUnits || ""} ${item.offset}`;

        const hasConnection =
          item.id === "superblock" ||
          item.id === "block group descriptor table" ||
          item.id === "inode table" ||
          item.id === "inode bitmap" ||
          item.id === "block bitmap" ||
          item.id === "Reserved Area" ||
          item.id === "Root Directory";

        return (
          <CanvasTableComponentRow key={item.id}>
            <CanvasTableComponentCell className={borderStyles}>
              {offset}
            </CanvasTableComponentCell>
            <CanvasTableComponentCell className={borderStyles}>
              {size}
            </CanvasTableComponentCell>
            <CanvasTableComponentCell className={borderStyles}>
              {hasConnection && (
                <Handle
                  id={item.id}
                  position={Position.Right}
                  type="source"
                  style={{
                    top: 0,
                    right: 4,
                  }}
                />
              )}
              {item.id}
            </CanvasTableComponentCell>
          </CanvasTableComponentRow>
        );
      }),
    [data]
  );

  return (
    <div className="border border-black rounded-sm overflow-hidden bg-white">
      <Handle type="target" position={Position.Left} />
      <div className="absolute top-0 -translate-y-[110%] origin-top-left border border-green-700 bg-green-200 rounded-md px-2 text-sm">
        {data.title}
      </div>
      <div className="border rounded-lg m-4">
        <CanvasTableComponent>
          <CanvasTableComponentHeader>
            <CanvasTableComponentRow>
              {data.headers.map((header) => (
                <CanvasTableComponentHead key={header}>
                  {header}
                </CanvasTableComponentHead>
              ))}
            </CanvasTableComponentRow>
          </CanvasTableComponentHeader>
          <CanvasTableComponentBody>{inodeRows}</CanvasTableComponentBody>
        </CanvasTableComponent>
      </div>
    </div>
  );
};
