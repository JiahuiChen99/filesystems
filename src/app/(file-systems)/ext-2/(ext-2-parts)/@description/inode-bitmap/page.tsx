import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inode Bitmap",
};

export default function InodeBitmap() {
  return (
    <>
      <p>
        The &quot;Inode Bitmap&quot; works in a similar way as the &quot;
        <a href="/ext-2/block-bitmap">Block Bitmap</a>&quot;, difference being
        in each bit representing an inode in the &quot;
        <a href="/ext-2/inode-table">Inode Table</a>&quot; rather than a block.
        Since inode numbers start from 1 rather than 0, the first bit in the
        first block group&apos;s inode bitmap represent inode number 1.
      </p>
      <p>
        There is one inode bitmap per group and its location may be determined
        by reading the &quot;
        <a href="/ext-2/block-group-descriptor/#bg_inode_bitmap">
          bg_inode_bitmap
        </a>
        &quot; in its associated&nbsp;
        <a href="/ext-2/block-group-descriptor/">group descriptor</a>.
      </p>
      <p>
        When the inode table is created, all the reserved inodes are marked as
        used. In revision 0 this is the first 11 inodes.
      </p>
    </>
  );
}
