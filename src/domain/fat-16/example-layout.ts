import { CanvasDTO } from "@/dto/canvas";

export const exampleLayout: Array<CanvasDTO.Data> = [
  {
    id: "reserved-area",
    name: "Reserved Area",
    metadata: {
      group: "reserved-area",
    },
  },
  {
    id: "fat-1",
    name: "FAT 1",
    metadata: {
      group: "fat-1",
    },
  },
  {
    id: "fat-2",
    name: "FAT 2",
    metadata: {
      group: "fat-2",
    },
  },
  {
    id: "root-directory",
    name: "Root Directory",
    metadata: {
      group: "root-directory",
    },
  },
  {
    id: "data",
    name: "Data (files and directories)",
    metadata: {
      group: "data",
    },
  },
];
