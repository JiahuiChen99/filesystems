import { CanvasDTO } from "@/dto/canvas";
import { cn } from "@/lib/utils";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { memo } from "react";

const ROWS = 4;
const COLS = 8;

const matrix = Array.from({ length: ROWS }, () =>
  Array.from({ length: COLS }, () => Math.random() >= 0.5)
);

export const CanvasBitmapNode = memo(
  ({ data }: NodeProps<CanvasDTO.BitmapNode>) => {
    return (
      <>
        <Handle type="target" position={Position.Left} />
        <div className="border border-black rounded-sm overflow-hidden bg-white">
          <div className="absolute top-0 -translate-y-[110%] origin-top-left border border-green-700 bg-green-200 rounded-md px-2 text-sm">
            {data.title}
          </div>
          <div className="p-2">
            <div className="grid grid-rows-4 grid-cols-8 gap-1">
              {matrix.map((row, rowIndex) =>
                row.map((col, colIndex) => (
                  <div
                    key={`bitmap-[${rowIndex}]-[${colIndex}]`}
                    className={cn("w-7 h-7 rounded-md border", {
                      "border-green-700 bg-green-300/20":
                        matrix[rowIndex][colIndex],
                      "border-red-700 bg-red-300/20":
                        !matrix[rowIndex][colIndex],
                    })}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

CanvasBitmapNode.displayName = "CanvasBitmapNode";
