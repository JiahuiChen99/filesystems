import type { EXT2 } from "@/app/ext2/types/ext2";

export const iflagsData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_SECRM_FL",
    name: "EXT2_SECRM_FL",
    value: "0x00000001",
    description: "secure deletion",
  },
  {
    id: "EXT2_UNRM_FL",
    name: "EXT2_UNRM_FL",
    value: "0x00000002",
    description: "record for undelete",
  },
  {
    id: "EXT2_COMPR_FL",
    name: "EXT2_COMPR_FL",
    value: "0x00000004",
    description: "compressed file",
  },
  {
    id: "EXT2_SYNC_FL",
    name: "EXT2_SYNC_FL",
    value: "0x00000008",
    description: "synchronous updates",
  },
  {
    id: "EXT2_IMMUTABLE_FL",
    name: "EXT2_IMMUTABLE_FL",
    value: "0x00000010",
    description: "immutable file",
  },
  {
    id: "EXT2_APPEND_FL",
    name: "EXT2_APPEND_FL",
    value: "0x00000020",
    description: "append only",
  },
  {
    id: "EXT2_NODUMP_FL",
    name: "EXT2_NODUMP_FL",
    value: "0x00000040",
    description: "do not dump/delete file",
  },
  {
    id: "EXT2_NOATIME_FL",
    name: "EXT2_NOATIME_FL",
    value: "0x00000080",
    description: "do not update .i_atime",
  },
  {
    id: "EXT2_DIRTY_FL",
    name: "EXT2_DIRTY_FL",
    value: "0x00000100",
    description: "dirty (file is in use?)",
  },
  {
    id: "EXT2_COMPRBLK_FL",
    name: "EXT2_COMPRBLK_FL",
    value: "0x00000200",
    description: "compressed blocks",
  },
  {
    id: "EXT2_NOCOMPR_FL",
    name: "EXT2_NOCOMPR_FL",
    value: "0x00000400",
    description: "access raw compressed data",
  },
  {
    id: "EXT2_ECOMPR_FL",
    name: "EXT2_ECOMPR_FL",
    value: "0x00000800",
    description: "compression error",
  },
  {
    id: "EXT2_BTREE_FL",
    name: "EXT2_BTREE_FL",
    value: "0x00001000",
    description: "b-tree format directory",
  },
  {
    id: "EXT2_INDEX_FL",
    name: "EXT2_INDEX_FL",
    value: "0x00001000",
    description: "Hash indexed directory",
  },
  {
    id: "EXT2_IMAGIC_FL",
    name: "EXT2_IMAGIC_FL",
    value: "0x00002000",
    description: "?",
  },
  {
    id: "EXT3_JOURNAL_DATA_FL",
    name: "EXT3_JOURNAL_DATA_FL",
    value: "0x00004000",
    description: "journal file data",
  },
  {
    id: "EXT2_RESERVED_FL",
    name: "EXT2_RESERVED_FL",
    value: "0x80000000",
    description: "reserved for ext2 implementation",
  },
];
