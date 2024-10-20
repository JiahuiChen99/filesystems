import { groupDescriptorDataCanvas } from "@/app/ext2/(ext2-parts)/@extended/block-group-descriptor/data/ext2-group-descriptor";
import { inodeDataCanvas } from "@/app/ext2/(ext2-parts)/@extended/inode-table/data/ext2-inode";
import { superBlockDataCanvas } from "@/app/ext2/(ext2-parts)/@extended/super-block/data/ext2-super-block";
import { twentyMBpartitionWith1KiBBlocks } from "@/app/ext2/data/20mb-partition-1kib";
import { CanvasDTO } from "@/dto/canvas";
import { Edge, MarkerType } from "@xyflow/react";

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
    },
    type: "canvas-table",
  },
];

export const edges: Array<Edge> = [
  {
    id: "layout-to-superblock",
    source: "layout-example",
    target: "super-block",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "layout-to-block-group-descriptor",
    source: "layout-example",
    target: "block-group-descriptor",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "layout-to-block-bitmap",
    source: "layout-example",
    target: "block-bitmap",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "layout-to-inode-bitmap",
    source: "layout-example",
    target: "inode-bitmap",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "layout-to-inode-table",
    source: "layout-example",
    target: "inode-table",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
