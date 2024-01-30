import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Blocks } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Group Descriptor",
};

export default function BlockGroupDescriptor() {
  return (
    <>
      <p>
        The block group descriptor table is an array of block group descriptor,
        used to define parameters of all the block groups. It provides the
        location of the inode bitmap and inode table, block bitmap, number of
        free blocks and inodes, and some other useful information. The block
        group descriptor table starts on the first block following the
        superblock. This would be the third block on a 1KiB block file system,
        or the second block for 2KiB and larger block file systems. Shadow
        copies of the block group descriptor table are also stored with every
        copy of the superblock. Depending on how many block groups are defined,
        th is table can require multiple blocks of storage. Always refer to the
        superblock in case of doubt. The layout of a block group descriptor is
        as follows:
      </p>
      <p>
        For each block group in the file system, such a group_desc is created.
        Each represent a single block group within the file system and the
        information within any one of them is pertinent only to the group it is
        describing. Every block group descriptor table contains all the
        information about all the block groups.
      </p>
      <Alert>
        <Blocks className="h-6 w-6" />
        <AlertTitle>Note:</AlertTitle>
        <AlertDescription>
          All indicated &quot;block id&quot; are absolute.
        </AlertDescription>
      </Alert>
    </>
  );
}
