import { reservedAreaDataCanvas } from "@/app/fat16/(fat16-parts)/@extended/reserved-area/data/fat16-reserved-area";
import { fat16RootDirDataCanvas } from "@/app/fat16/(fat16-parts)/@extended/root-directory/data/fat16-root-directory";
import { exampleLayout } from "@/app/fat16/data/example-layout";
import { CanvasDTO } from "@/dto/canvas";
import { cn } from "@/lib/utils";
import { Edge, MarkerType } from "@xyflow/react";

const layoutTableHeaders = ["Block Offset", "Length", "Name"];
const tableHeaders = ["Offset (byte)", "Size (bytes)", "Name"];

export const nodes: Array<
  CanvasDTO.TableNode<CanvasDTO.SizeAndOffset> | CanvasDTO.TableNode
> = [
  {
    id: "example-layout",
    position: { x: 0, y: 0 },
    data: {
      title: "FAT 16 layout",
      headers: layoutTableHeaders,
      tableData: exampleLayout,
      isRoot: true,
    },
    type: "canvas-table",
  },
  {
    id: "reserved-area",
    position: { x: 600, y: -500 },
    data: {
      title: "Reserved Area (Boot Sector and BPB Structure)",
      headers: tableHeaders,
      tableData: reservedAreaDataCanvas,
    },
    type: "canvas-table",
  },
  {
    id: "root-directory",
    position: { x: 600, y: 400 },
    data: {
      title: "Root directory (Directory Entry Structure)",
      headers: tableHeaders,
      tableData: fat16RootDirDataCanvas,
    },
    type: "canvas-table",
  },
];

export const edges: Array<Edge> = [
  {
    id: "layout-to-reserved-area",
    source: "example-layout",
    target: "reserved-area",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "layout-to-root-directory",
    source: "example-layout",
    target: "root-directory",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export const generateCanvasTableRowConfig = (
  item: CanvasDTO.Data
): { borderStyles: string } => {
  const borderStyles = cn({
    "border-amber-700 bg-amber-300/20": item.metadata.group === "reserved-area",
    "border-yellow-700 bg-yellow-300/20":
      item.metadata.group === "fat-1" || item.metadata.group === "fat-2",
    "border-green-700 bg-green-300/20":
      item.metadata.group === "root-directory",
    "border-blue-700 bg-blue-300/20": item.metadata.group === "data",
  });

  return {
    borderStyles,
  };
};
