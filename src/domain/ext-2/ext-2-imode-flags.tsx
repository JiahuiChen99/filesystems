import type { EXT2 } from "@/app/ext-2/types/ext-2";

export const imodeData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_S_IFSOCK",
    name: "EXT2_S_IFSOCK",
    value: "0xc000",
    description: "socket",
  },
  {
    id: "EXT2_S_IFLNK",
    name: "EXT2_S_IFLNK",
    value: "0xa000",
    description: "symbolic link",
  },
  {
    id: "EXT2_S_IFREG",
    name: "EXT2_S_IFREG",
    value: "0x8000",
    description: "regular file",
  },
  {
    id: "EXT2_S_IFBLK",
    name: "EXT2_S_IFBLK",
    value: "0x6000",
    description: "block device",
  },
  {
    id: "EXT2_S_IFDIR",
    name: "EXT2_S_IFDIR",
    value: "0x4000",
    description: "directory",
  },
  {
    id: "EXT2_S_IFCHR",
    name: "EXT2_S_IFCHR",
    value: "0x2000",
    description: "character device",
  },
  {
    id: "EXT2_S_IFIFO",
    name: "EXT2_S_IFIFO",
    value: "0x1000",
    description: "fifo",
  },
  {
    id: "EXT2_S_ISUID",
    name: "EXT2_S_ISUID",
    value: "0x0800",
    description: "Set process User ID",
  },
  {
    id: "EXT2_S_ISGID",
    name: "EXT2_S_ISGID",
    value: "0x0400",
    description: "Set process Group ID",
  },
  {
    id: "EXT2_S_ISVTX",
    name: "EXT2_S_ISVTX",
    value: "0x0200",
    description: "sticky bit",
  },
  {
    id: "EXT2_S_IRUSR",
    name: "EXT2_S_IRUSR",
    value: "0x0100",
    description: "user read",
  },
  {
    id: "EXT2_S_IWUSR",
    name: "EXT2_S_IWUSR",
    value: "0x0080",
    description: "user write",
  },
  {
    id: "EXT2_S_IXUSR",
    name: "EXT2_S_IXUSR",
    value: "0x0040",
    description: "user execute",
  },
  {
    id: "EXT2_S_IRGRP",
    name: "EXT2_S_IRGRP",
    value: "0x0020",
    description: "group read",
  },
  {
    id: "EXT2_S_IWGRP",
    name: "EXT2_S_IWGRP",
    value: "0x0010",
    description: "group write",
  },
  {
    id: "EXT2_S_IXGRP",
    name: "EXT2_S_IXGRP",
    value: "0x0008",
    description: "group execute",
  },
  {
    id: "EXT2_S_IROTH",
    name: "EXT2_S_IROTH",
    value: "0x0004",
    description: "others read",
  },
  {
    id: "EXT2_S_IWOTH",
    name: "EXT2_S_IWOTH",
    value: "0x0002",
    description: "others write",
  },
  {
    id: "EXT2_S_IXOTH",
    name: "EXT2_S_IXOTH",
    value: "0x0001",
    description: "others execute",
  },
];
