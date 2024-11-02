import { CanvasDTO } from "@/dto/canvas";
import { Handle, NodeProps, Position } from "@xyflow/react";
import React from "react";
import {
  CanvasTableComponent,
  CanvasTableComponentBody,
  CanvasTableComponentHeader,
  CanvasTableComponentRow,
} from "./table";

export const CanvasTableNode = ({
  data,
}: NodeProps<CanvasDTO.TableNode<CanvasDTO.SizeAndOffset>>) => {
  const canvasNodeHandle = React.useMemo(
    () =>
      (data.isRoot === false || data.isRoot === undefined) && (
        <Handle type="target" position={Position.Left} />
      ),
    [data.isRoot]
  );

  // Call Dependency Injection callbacks to build the table
  // Each file system will have different table configuration
  const tableBodyContent: React.ReactNode = data.buildTableBodyContent();
  const tableHeadersContent: React.ReactNode = data.buildTableHeadersContent();

  return (
    <div className="border border-black rounded-sm overflow-hidden bg-white">
      {canvasNodeHandle}
      <div className="absolute top-0 -translate-y-[110%] origin-top-left border border-green-700 bg-green-200 rounded-md px-2 text-sm">
        {data.title}
      </div>
      <div className="border rounded-lg m-4">
        <CanvasTableComponent>
          <CanvasTableComponentHeader>
            <CanvasTableComponentRow>
              {tableHeadersContent}
            </CanvasTableComponentRow>
          </CanvasTableComponentHeader>
          <CanvasTableComponentBody>
            {tableBodyContent}
          </CanvasTableComponentBody>
        </CanvasTableComponent>
      </div>
    </div>
  );
};
