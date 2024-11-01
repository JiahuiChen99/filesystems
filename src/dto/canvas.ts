import { Node } from "@xyflow/react";

export namespace CanvasDTO {
  // Appears at Top-left corner
  type NodeInfo = {
    title: string;
  };

  export type ReactFlowElementMetadata = {
    metadata: { group: string };
  };

  export type Data = ReactFlowElementMetadata & {
    id: string;
    name: string;
    size: number | string;
    units: "byte" | "block";
    offset: number;
    offsetUnits: "byte" | "block";
  };

  export type TableSection = {
    sectionTitle: string;
  };

  export type TableNodeData = {
    title: string;
    headers: Array<string>;
    tableData: Array<Data | TableSection>;
    isRoot?: boolean;
  };

  export type TableNode = Node<TableNodeData>;

  export type BitmapNode = Node<NodeInfo>;
}
