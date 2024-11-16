import { twentyMBpartitionWith1KiBBlocks } from "@/domain/ext-2/20mb-partition-1kib";
import { groupDescriptorDataCanvas } from "@/domain/ext-2/ext2-group-descriptor";
import { inodeDataCanvas } from "@/domain/ext-2/ext2-inode";
import { superBlockDataCanvas } from "@/domain/ext-2/ext2-super-block";
import { CanvasDTO } from "@/dto/canvas";
import { Edge } from "@xyflow/react";
import {
  buildTableBodyContent,
  buildTableHeadersContent,
} from "./ext-2-helpers";

const layoutTableHeaders = ["Block Offset", "Length", "Description"];
const tableHeaders = ["Offset (bytes)", "Size (bytes)", "Description"];

export const nodes: Array<CanvasDTO.TableNode | CanvasDTO.BitmapNode> = [
  {
    id: "layout-example",
    position: { x: 0, y: 0 },
    data: {
      title: "Sample 20mb Partition Layout with 1KiB blocks",
      headers: layoutTableHeaders,
      tableData: twentyMBpartitionWith1KiBBlocks,
      isRoot: true,
      buildTableBodyContent: () =>
        buildTableBodyContent(twentyMBpartitionWith1KiBBlocks),
      buildTableHeadersContent: () =>
        buildTableHeadersContent(layoutTableHeaders),
    },
    type: "canvas-table",
  },
  {
    id: "super-block",
    position: { x: 1500, y: -1500 },
    data: {
      title: "Superblock",
      headers: tableHeaders,
      tableData: superBlockDataCanvas,
      buildTableBodyContent: () => buildTableBodyContent(superBlockDataCanvas),
      buildTableHeadersContent: () => buildTableHeadersContent(tableHeaders),
    },
    type: "canvas-table",
  },
  {
    id: "block-group-descriptor",
    position: { x: 1000, y: -200 },
    data: {
      title: "Block Group Descriptor",
      headers: tableHeaders,
      tableData: groupDescriptorDataCanvas,
      buildTableBodyContent: () =>
        buildTableBodyContent(groupDescriptorDataCanvas),
      buildTableHeadersContent: () => buildTableHeadersContent(tableHeaders),
    },
    type: "canvas-table",
  },
  {
    id: "block-bitmap",
    position: { x: 600, y: 600 },
    data: {
      title: "Block Bitmap",
    },
    type: "canvas-bitmap",
  },
  {
    id: "inode-bitmap",
    position: { x: 600, y: 900 },
    data: {
      title: "Inode Bitmap",
    },
    type: "canvas-bitmap",
  },
  {
    id: "inode-table",
    position: { x: 1000, y: 250 },
    data: {
      title: "Inode table",
      headers: tableHeaders,
      tableData: inodeDataCanvas,
      buildTableBodyContent: () => buildTableBodyContent(inodeDataCanvas),
      buildTableHeadersContent: () => buildTableHeadersContent(tableHeaders),
    },
    type: "canvas-table",
  },
];

export const edges: Array<Edge> = [
  {
    id: "layout-to-superblock",
    source: "layout-example",
    target: "super-block",
    sourceHandle: "superblock",
  },
  {
    id: "layout-to-block-group-descriptor",
    source: "layout-example",
    target: "block-group-descriptor",
    sourceHandle: "block group descriptor table",
  },
  {
    id: "layout-to-block-bitmap",
    source: "layout-example",
    target: "block-bitmap",
    sourceHandle: "block bitmap",
  },
  {
    id: "layout-to-inode-bitmap",
    source: "layout-example",
    target: "inode-bitmap",
    sourceHandle: "inode bitmap",
  },
  {
    id: "layout-to-inode-table",
    source: "layout-example",
    target: "inode-table",
    sourceHandle: "inode table",
  },
];
