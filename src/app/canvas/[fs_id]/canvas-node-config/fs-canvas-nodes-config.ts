import { edges as EXT2Edges, nodes as EXT2Nodes } from "./ext2";

// The keys must match with fs_id passed in dynamic link param
export const fsNodesConfig = {
  "ext-2": {
    nodes: EXT2Nodes,
    edges: EXT2Edges,
  },
};
