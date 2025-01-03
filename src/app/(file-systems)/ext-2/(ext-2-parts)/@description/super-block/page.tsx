import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Block",
};

export default function SuperBlock() {
  return (
    <>
      <p>
        The superblock contains <b>all the information</b> about the
        configuration of the filesystem. The information in the superblock
        contains fields such as the total number of inodes and blocks in the
        filesystem and how many are free, how many inodes and blocks are in each
        block group, when the filesystem was mounted (and if it was cleanly
        unmounted), when it was modified, what version of the filesystem it is
        and which OS created it.
      </p>
      <p>
        The primary copy of the superblock is stored at an offset of&nbsp;
        <b>1024 bytes</b> from the start of the file, block device or partition
        formatted with Ext2 and later variants (Ext3, Ext4). Its structure is
        mostly constant from Ext2 to Ext3 and Ext4 with only some minor changes.
        It is essential to mounting the filesystem. Since it is so important,
        backup copies of the superblock are stored in block groups throughout
        the filesystem.
      </p>
      <p>
        The first version of ext-2 (revision 0) stores a copy at the start of
        every block group, along with backups of the group descriptor block(s).
        Because this can consume a considerable amount of space for large
        filesystems, later revisions can optionally reduce the number of backup
        copies by only putting backups in specific groups (this is the sparse
        superblock feature). The groups chosen are 0, 1 and powers of 3, 5 and 7
      </p>
      <p>
        Revision 1 and higher of the filesystem also store extra fields, such as
        a volume name, a unique identification number, the inode size, and space
        for optional filesystem features to store configuration info.
      </p>
      <p>
        All fields in the superblock (as in all other ext-2 structures) are
        stored on the disc in&nbsp;
        <a href="https://en.wikipedia.org/wiki/Endianness">little endian</a>
        &nbsp; format, so a filesystem is portable between machines without
        having to know what machine it was created on.
      </p>
    </>
  );
}
