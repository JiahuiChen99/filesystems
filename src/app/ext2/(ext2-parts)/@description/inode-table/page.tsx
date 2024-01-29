import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inode Table",
};

export default function InodeTable() {
  return (
    <section>
      <p>
        The inode table is used to keep track of every directory, regular file,
        symbolic link, or special file; their location, size, type and access
        rights are all stored in inodes. There is no filename stored in the
        inode itself, names are contained in directory files only
      </p>
      <p>
        There is one inode table per block group and it can be located by
        reading the bg_inode_table in its associated group descriptor. There are
        s_inodes_per_group inodes per table.
      </p>
      <p>
        Each inode contain the information about a single physical file on the
        system. A file can be a directory, a socket, a buffer, character or
        block device, symbolic link or a regular file. So an inode can be seen
        as a block of information related to an entity, describing its location
        on disk, its size and its owner. An inode looks like this:
      </p>
    </section>
  );
}
