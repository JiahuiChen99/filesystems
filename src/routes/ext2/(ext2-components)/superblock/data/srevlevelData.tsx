import { EXT2 } from "~/typings/ext2";

export const srevlevelData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_GOOD_OLD_REV",
    name: "EXT2_GOOD_OLD_REV",
    value: 0,
    description: "Revision 0",
  },
  {
    id: "EXT2_DYNAMIC_REV",
    name: "EXT2_DYNAMIC_REV",
    value: 1,
    description:
      "Revision 1 with variable inode sizes, extended attribute, etc.",
  },
];
