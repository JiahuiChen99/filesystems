import { EXT2 } from "~/typings/ext2";

export const sfeaturecompatData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_FEATURE_COMPAT_DIR_PREALLOC",
    name: "EXT2_FEATURE_COMPAT_DIR_PREALLOC",
    value: "0x0001",
    description: "Block pre-allocation for new directories",
  },
  {
    id: "EXT2_FEATURE_COMPAT_IMAGIC_INODES",
    name: "EXT2_FEATURE_COMPAT_IMAGIC_INODES",
    value: "0x0002",
    description: "",
  },
  {
    id: "EXT3_FEATURE_COMPAT_HAS_JOURNAL",
    name: "EXT3_FEATURE_COMPAT_HAS_JOURNAL",
    value: "0x0004",
    description: "An Ext3 journal exists",
  },
  {
    id: "EXT2_FEATURE_COMPAT_EXT_ATTR",
    name: "EXT2_FEATURE_COMPAT_EXT_ATTR",
    value: "0x0008",
    description: "Extended inode attributes are present",
  },
  {
    id: "EXT2_FEATURE_COMPAT_RESIZE_INO",
    name: "EXT2_FEATURE_COMPAT_RESIZE_INO",
    value: "0x0010",
    description: "Non-standard inode size used",
  },
  {
    id: "EXT2_FEATURE_COMPAT_DIR_INDEX",
    name: "EXT2_FEATURE_COMPAT_DIR_INDEX",
    value: "0x0020",
    description: "Directory indexing (HTree)",
  },
];
