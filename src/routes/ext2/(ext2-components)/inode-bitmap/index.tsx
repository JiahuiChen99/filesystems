import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { BlockGroupRegionContext } from "../context/ext2Context";

export default component$(() => {
  const blockGroupRegionInfo = useContext(BlockGroupRegionContext);

  useVisibleTask$(() => {
    blockGroupRegionInfo.blockGroupRegionTitle = "Inode Bitmap";
  });

  return (
    <section>
      <p>
        The “Inode Bitmap” works in a similar way as the "
        <a href="/ext2/block-bitmap">Block Bitmap</a>", difference being in each
        bit representing an inode in the “
        <a href="/ext2/inode-table">Inode Table</a>” rather than a block. Since
        inode numbers start from 1 rather than 0, the first bit in the first
        block group's inode bitmap represent inode number 1.
      </p>
      <p>
        There is one inode bitmap per group and its location may be determined
        by reading the “
        <a href="/ext2/block-group-descriptor/#bg_inode_bitmap">
          bg_inode_bitmap
        </a>
        ” in its associated{" "}
        <a href="/ext2/block-group-descriptor/">group descriptor</a>.
      </p>
      <p>
        When the inode table is created, all the reserved inodes are marked as
        used. In revision 0 this is the first 11 inodes.
      </p>
    </section>
  );
});
