import { EXT2 } from "~/typings/ext2";

export const sfeaturerocompatData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_FEATURE_RO_COMPAT_SPARSE_SUPER",
    name: "EXT2_FEATURE_RO_COMPAT_SPARSE_SUPER",
    value: "0x0001",
    description: "Sparse Superblock",
  },
  {
    id: "EXT2_FEATURE_RO_COMPAT_LARGE_FILE",
    name: "EXT2_FEATURE_RO_COMPAT_LARGE_FILE",
    value: "0x0002",
    description: "Large file support, 64-bit file size",
  },
  {
    id: "EXT2_FEATURE_RO_COMPAT_BTREE_DIR",
    name: "EXT2_FEATURE_RO_COMPAT_BTREE_DIR",
    value: "0x0004",
    description: "Binary tree sorted directory files",
  },
];
