import { EXT2 } from "~/typings/ext2";

export const sserrorsData: EXT2.ConstValueDesc[] = [
  {
    id: "EXT2_ERRORS_CONTINUE",
    name: "EXT2_ERRORS_CONTINUE",
    value: 1,
    description: "Continue as if nothing happened",
  },
  {
    id: "EXT2_ERRORS_NO",
    name: "EXT2_ERRORS_NO",
    value: 2,
    description: "Remount read-only",
  },
  {
    id: "EXT2_ERRRORS_PANIC",
    name: "EXT2_ERRRORS_PANIC",
    value: 3,
    description: "Cause a kernel panic",
  },
];
