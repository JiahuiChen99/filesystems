import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Bitmap",
};

export default function BlockBitmap() {
  return (
    <>
      <p>
        On small file systems, the &quot;Block Bitmap&quot; is normally located
        at the first block, or second block if a superblock backup is present,
        of each block group. Its official location can be determined by reading
        the &quot;<a href="/ext2/block-group-descriptor">bg_block_bitmap</a>
        &quot; in its associated&nbsp;
        <a href="/ext2/block-group-descriptor">group descriptor</a>.
      </p>
      <p>
        Each bit represent the current state of a block within that block group,
        where 1 means &quot;used&quot; and 0 &quot;free/available&quot;. The
        first block of this block group is represented by bit 0 of byte 0, the
        second by bit 1 of byte 0. The 8th block is represented by bit 7 (most
        significant bit) of byte 0 while the 9th block is represented by bit 0
        (least significant bit) of byte 1.
      </p>
    </>
  );
}
