import { CanvasDTO } from "@/dto/canvas";

export const twentyMBpartitionWith1KiBBlocks: Array<
  CanvasDTO.Data | CanvasDTO.TableSection
> = [
  {
    sectionTitle: "-- block group 0, blocks 1 to 8192 --",
  },
  {
    id: "boot-record (if present)",
    name: "boot record (if present)",
    metadata: {
      group: "boot-record",
    },
    size: 512,
    units: "byte",
    offset: 0,
    offsetUnits: "byte",
  },
  {
    id: "additional boot record data (if present)",
    name: "additional boot record data (if present)",
    metadata: {
      group: "boot-record",
    },
    size: 512,
    units: "byte",
    offset: 512,
    offsetUnits: "byte",
  },
  {
    sectionTitle: "-- block group 1, blocks 8193 to 16384 --",
  },
  {
    id: "superblock",
    name: "superblock",
    metadata: {
      group: "superblock",
    },
    size: 1024,
    units: "byte",
    offset: 1024,
    offsetUnits: "block",
  },
  {
    id: "block group descriptor table",
    name: "block group descriptor table",
    metadata: {
      group: "block-group-descriptor",
    },
    size: 1,
    units: "block",
    offset: 2,
    offsetUnits: "block",
  },
  {
    id: "block bitmap",
    name: "block bitmap",
    metadata: {
      group: "block-bitmap",
    },
    size: 1,
    units: "block",
    offset: 3,
    offsetUnits: "block",
  },
  {
    id: "inode bitmap",
    name: "inode bitmap",
    metadata: {
      group: "inode-bitmap",
    },
    size: 1,
    units: "block",
    offset: 4,
    offsetUnits: "block",
  },
  {
    id: "inode table",
    name: "inode table",
    metadata: {
      group: "inode-table",
    },
    size: 214,
    units: "block",
    offset: 5,
    offsetUnits: "block",
  },
  {
    id: "data blocks",
    name: "data blocks",
    metadata: {
      group: "data-blocks",
    },
    size: 7974,
    units: "block",
    offset: 219,
    offsetUnits: "block",
  },
  {
    sectionTitle: "-- block group 2, blocks 16385 to 24576 --",
  },
  {
    id: "superblock backup block group 2",
    name: "superblock backup",
    metadata: {
      group: "superblock",
    },
    size: 1024,
    units: "byte",
    offset: 8193,
    offsetUnits: "block",
  },
  {
    id: "block group descriptor table backup block group 2",
    name: "block group descriptor table backup",
    metadata: {
      group: "block-group-descriptor",
    },
    size: 1,
    units: "block",
    offset: 8194,
    offsetUnits: "block",
  },
  {
    id: "block bitmap block group 2",
    name: "block bitmap",
    metadata: {
      group: "block-bitmap",
    },
    size: 1,
    units: "block",
    offset: 8195,
    offsetUnits: "block",
  },
  {
    id: "inode bitmap block group 2",
    name: "inode bitmap",
    metadata: {
      group: "inode-bitmap",
    },
    size: 1,
    units: "block",
    offset: 8196,
    offsetUnits: "block",
  },
  {
    id: "inode table block group 2",
    name: "inode table",
    metadata: {
      group: "inode-table",
    },
    size: 214,
    units: "block",
    offset: 8197,
    offsetUnits: "block",
  },
  {
    id: "data blocks block group 2",
    name: "data blocks",
    metadata: {
      group: "data-blocks",
    },
    size: 7974,
    units: "block",
    offset: 8408,
    offsetUnits: "block",
  },
];
