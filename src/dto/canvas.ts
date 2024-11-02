import { Node } from "@xyflow/react";

export namespace CanvasDTO {
  // Appears at Top-left corner
  type NodeInfo = {
    title: string;
  };

  type ReactFlowElementMetadata = {
    metadata: { group: string };
  };

  type Id = {
    id: string;
    name: string;
  };

  type BaseData = Id & ReactFlowElementMetadata;

  export type SizeAndOffset = {
    size: number | string;
    units: "byte" | "block";
    offset: number;
    offsetUnits: "byte" | "block";
  };

  export type Data<TableDataType = undefined> = TableDataType extends undefined
    ? BaseData
    : BaseData & TableDataType;

  export type TableSection = {
    sectionTitle: string;
  };

  export type TableNodeData<T> = {
    title: string;
    headers: Array<string>;
    tableData: Array<Data<T> | TableSection>;
    isRoot?: boolean;
    buildTableBodyContent: () => React.ReactNode[];
    buildTableHeadersContent: () => React.ReactNode[];
  };

  export type TableNode<TableDataType = undefined> = Node<
    TableNodeData<TableDataType>
  >;

  export type BitmapNode = Node<NodeInfo>;
}
