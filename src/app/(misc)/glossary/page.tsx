import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "File Systems Glossary",
};

export default function Glossary() {
  return (
    <div className="mx-20 my-10 text-justify">
      <h1 className="font-extrabold text-xl">Glossary </h1>
      <h2 className="font-bold text-lg">
        The Second Extended File System (EXT2)
      </h2>
      <section id="block-group">
        <h3 className="font-bold">Block group</h3>
        <Alert className="w-fit">
          <BookOpen className="h-6 w-6" />
          <AlertTitle>Note:</AlertTitle>
          <AlertDescription>
            This definition comes from the Linux Kernel Documentation.
          </AlertDescription>
        </Alert>
        <p>
          Blocks are clustered into block groups in order to reduce
          fragmentation and minimise the amount of head seeking when reading a
          large amount of consecutive data. Information about each block group
          is kept in a descriptor table stored in the block(s) immediately after
          the superblock. Two blocks near the start of each group are reserved
          for the block usage bitmap and the inode usage bitmap which show which
          blocks and inodes are in use. Since each bitmap is limited to a single
          block, this means that the maximum size of a block group is 8 times
          the size of a block.
        </p>
        <p>
          The block(s) following the bitmaps in each block group are designated
          as the inode table for that block group and the remainder are the data
          blocks. The block allocation algorithm attempts to allocate data
          blocks in the same block group as the inode which contains them.
        </p>
      </section>
      <h2 className="font-bold">File Allocation Table 16-bits (FAT16)</h2>
    </div>
  );
}
