import { EXT2 } from "~/typings/ext2";

export const reservedInodesData: EXT2.ConstValueDesc[] = [
  { name: "EXT2_BAD_INO", value: 1, description: "bad blocks inode" },
  { name: "EXT2_ROOT_INO", value: 2, description: "root directory inode" },
  {
    name: "EXT2_ACL_IDX_INO",
    value: 3,
    description: "ACL index inode (deprecated?)",
  },
  {
    name: "EXT2_ACL_DATA_INO",
    value: 4,
    description: "ACL data inode (deprecated?)",
  },
  { name: "EXT2_BOOT_LOADER_INO", value: 5, description: "boot loader inode" },
  {
    name: "EXT2_UNDEL_DIR_INO",
    value: 6,
    description: "undelete directory inode",
  },
];
