import { EXT2 } from "~/typings/ext2";

export const sfeatureincompatData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_FEATURE_INCOMPAT_COMPRESSION",
    name: "EXT2_FEATURE_INCOMPAT_COMPRESSION",
    value: "0x0001",
    description: "Disk/File compression is used",
  },
  {
    id: "EXT2_FEATURE_INCOMPAT_FILETYPE",
    name: "EXT2_FEATURE_INCOMPAT_FILETYPE",
    value: "0x0002",
    description: "",
  },
  {
    id: "EXT3_FEATURE_INCOMPAT_RECOVER",
    name: "EXT3_FEATURE_INCOMPAT_RECOVER",
    value: "0x0004",
    description: "",
  },
  {
    id: "EXT3_FEATURE_INCOMPAT_JOURNAL_DEV",
    name: "EXT3_FEATURE_INCOMPAT_JOURNAL_DEV",
    value: "0x0008",
    description: "",
  },
  {
    id: "EXT2_FEATURE_INCOMPAT_META_BG",
    name: "EXT2_FEATURE_INCOMPAT_META_BG",
    value: "0x0010",
    description: "",
  },
];
