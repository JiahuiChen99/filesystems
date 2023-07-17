import { type EXT2 } from "~/typings/ext2";

export const reservedInodesData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_BAD_INO",
    name: "EXT2_BAD_INO",
    value: 1,
    description: "bad blocks inode",
  },
  {
    id: "EXT2_ROOT_INO",
    name: "EXT2_ROOT_INO",
    value: 2,
    description: "root directory inode",
  },
  {
    id: "EXT2_ACL_IDX_INO",
    name: "EXT2_ACL_IDX_INO",
    value: 3,
    description: "ACL index inode (deprecated?)",
  },
  {
    id: "EXT2_ACL_DATA_INO",
    name: "EXT2_ACL_DATA_INO",
    value: 4,
    description: "ACL data inode (deprecated?)",
  },
  {
    id: "EXT2_BOOT_LOADER_INO",
    name: "EXT2_BOOT_LOADER_INO",
    value: 5,
    description: "boot loader inode",
  },
  {
    id: "EXT2_UNDEL_DIR_INO",
    name: "EXT2_UNDEL_DIR_INO",
    value: 6,
    description: "undelete directory inode",
  },
];
