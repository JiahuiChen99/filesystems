import { createContextId } from "@builder.io/qwik";

export interface BlockGroupRegionContextType {
  blockGroupRegionTitle: string;
}

export const BlockGroupRegionContext =
  createContextId<BlockGroupRegionContextType>("ext2.BGSuperblock");
