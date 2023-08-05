import { EXT2 } from "~/typings/ext2";

export const sstateData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_VALID_FS",
    name: "EXT2_VALID_FS",
    value: 1,
    description: "Unmounted cleanly",
  },
  {
    id: "EXT2_ERROR_FS",
    name: "EXT2_ERROR_FS",
    value: 2,
    description: "Errors detected",
  },
];
