import { edges as EXT2Edges, nodes as EXT2Nodes } from "./ext-2";

import { edges as FAT16Edges, nodes as FAT16Nodes } from "./fat-16";

// The keys must match with fs_id passed in dynamic link param
export const fsNodesConfig = {
  "ext-2": {
    nodes: EXT2Nodes,
    edges: EXT2Edges,
  },
  "fat-16": {
    nodes: FAT16Nodes,
    edges: FAT16Edges,
  },
};
