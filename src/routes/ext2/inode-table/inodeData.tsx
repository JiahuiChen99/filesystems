import { $ } from "@builder.io/qwik";
import { EXT2Table } from "~/components/UI/table/table";
import { EXT2 } from "~/typings/ext2";
import { imodeData } from "./data/imodeData";
import { iflagsData } from "./data/iflagsData";

export const inodeData: EXT2.Struct[] = [
  {
    id: "i_mode",
    offset: 0,
    size: 2,
    description: "i_mode",
    info: $(() => (
      <>
        <p>
          16bit value used to indicate the format of the described file and the
          access rights. Here are the possible values, which can be combined in
          various ways:
        </p>
        <EXT2Table data={imodeData} />
      </>
    )),
  },
  {
    id: "i_uid",
    offset: 2,
    size: 2,
    description: "i_uid",
    info: $(() => <p>16bit user id associated with the file.</p>),
  },
  {
    id: "i_size",
    offset: 4,
    size: 4,
    description: "i_size",
    info: $(() => (
      <p>
        In revision 0, (signed) 32bit value indicating the size of the file in
        bytes. In revision 1 and later revisions, and only for regular files,
        this represents the lower 32-bit of the file size; the upper 32-bit is
        located in the i_dir_acl.
      </p>
    )),
  },
  {
    id: "i_atime",
    offset: 8,
    size: 4,
    description: "i_atime",
    info: $(() => (
      <p>
        32bit value representing the number of seconds since january 1st 1970 of
        the last time this inode was accessed.
      </p>
    )),
  },
  {
    id: "i_ctime",
    offset: 12,
    size: 4,
    description: "i_ctime",
    info: $(() => (
      <p>
        32bit value representing the number of seconds since january 1st 1970,
        of when the inode was created.
      </p>
    )),
  },
  {
    id: "i_mtime",
    offset: 16,
    size: 4,
    description: "i_mtime",
    info: $(() => (
      <p>
        32bit value representing the number of seconds since january 1st 1970,
        of the last time this inode was modified.
      </p>
    )),
  },
  {
    id: "i_dtime",
    offset: 20,
    size: 4,
    description: "i_dtime",
    info: $(() => (
      <p>
        32bit value representing the number of seconds since january 1st 1970,
        of when the inode was deleted.
      </p>
    )),
  },
  {
    id: "i_gid",
    offset: 24,
    size: 2,
    description: "i_gid",
    info: $(() => (
      <p>16bit value of the POSIX group having access to this file.</p>
    )),
  },
  {
    id: "i_links_count",
    offset: 26,
    size: 2,
    description: "i_links_count",
    info: $(() => (
      <>
        <p>
          16bit value indicating how many times this particular inode is linked
          (referred to). Most files will have a link count of 1. Files with hard
          links pointing to them will have an additional count for each hard
          link.
        </p>
        <p>
          Symbolic links do not affect the link count of an inode. When the link
          count reaches 0 the inode and all its associated blocks are freed.
        </p>
      </>
    )),
  },
  {
    id: "i_blocks",
    offset: 28,
    size: 4,
    description: "i_blocks",
    info: $(() => (
      <>
        <p>
          32-bit value representing the total number of 512-bytes blocks
          reserved to contain the data of this inode, regardless if these blocks
          are used or not. The block numbers of these reserved blocks are
          contained in the <a href="/ext2/inode-table#i_block">i_block</a>{" "}
          array.
        </p>
        <p>
          Since this value represents 512-byte blocks and not file system
          blocks, this value should not be directly used as an index to the
          i_block array. Rather, the maximum index of the i_block array should
          be computed from i_blocks /{" "}
          <code>{`((1024<<s_log_block_size)/512)`}</code>, or once simplified,{" "}
          <code>{`i_blocks/(2<<s_log_block_size)`}</code> .
        </p>
      </>
    )),
  },
  {
    id: "i_flags",
    offset: 32,
    size: 4,
    description: "i_flags",
    info: $(() => (
      <>
        <p>
          32bit value indicating how the ext2 implementation should behave when
          accessing the data for this inode.
        </p>
        <EXT2Table data={iflagsData} />
      </>
    )),
  },
  {
    id: "i_osd1",
    offset: 36,
    size: 4,
    description: "i_osd1",
    info: $(() => (
      <>
        <p>32bit OS dependant value.</p>
        <h3>Hurd</h3>
        <p>32bit value labeled as “translator”.</p>
        <h3>Linux</h3>
        <p>32bit value currently reserved.</p>
        <h3>Masix</h3>
        <p>32bit value currently reserved.</p>
      </>
    )),
  },
  {
    id: "i_block",
    offset: 40,
    size: "15 * 4",
    description: "i_block",
    info: $(() => (
      <>
        <p>
          15 x 32bit block numbers pointing to the blocks containing the data
          for this inode. The first 12 blocks are direct blocks. The 13th entry
          in this array is the block number of the first indirect block; which
          is a block containing an array of block ID containing the data.
          Therefore, the 13th block of the file will be the first block ID
          contained in the indirect block. With a 1KiB block size, blocks 13 to
          268 of the file data are contained in this indirect block.
        </p>
        <p>
          The 14th entry in this array is the block number of the first
          doubly-indirect block; which is a block containing an array of
          indirect block IDs, with each of those indirect blocks containing an
          array of blocks containing the data. In a 1KiB block size, there would
          be 256 indirect blocks per doubly-indirect block, with 256 direct
          blocks per indirect block for a total of 65536 blocks per
          doubly-indirect block.
        </p>
        <p>
          The 15th entry in this array is the block number of the
          triply-indirect block; which is a block containing an array of
          doubly-indrect block IDs, with each of those doubly-indrect block
          containing an array of indrect block, and each of those indirect block
          containing an array of direct block. In a 1KiB file system, this would
          be a total of 16777216 blocks per triply-indirect block.
        </p>
        <p>
          In the original implementation of Ext2, a value of 0 in this array
          effectively terminated it with no further block defined. In sparse
          files, it is possible to have some blocks allocated and some others
          not yet allocated with the value 0 being used to indicate which blocks
          are not yet allocated for this file.
        </p>
      </>
    )),
  },
  {
    id: "i_generation",
    offset: 100,
    size: 4,
    description: "i_generation",
    info: $(() => (
      <p>32bit value used to indicate the file version (used by NFS).</p>
    )),
  },
  {
    id: "i_file_acl",
    offset: 104,
    size: 4,
    description: "i_file_acl",
    info: $(() => (
      <>
        <p>
          32bit value indicating the block number containing the extended
          attributes. In revision 0 this value is always 0.
        </p>
        <q>
          Patches and implementation status of ACL under Linux can generally be
          found at <a href="http://acl.bestbits.at/">http://acl.bestbits.at/</a>
        </q>
      </>
    )),
  },
  {
    id: "i_dir_acl",
    offset: 108,
    size: 4,
    description: "i_dir_acl",
    info: $(() => (
      <>
        <p>
          In revision 0 this 32bit value is always 0. In revision 1, for regular
          files this 32bit value contains the high 32 bits of the 64bit file
          size.
        </p>
        <q>
          Linux sets this value to 0 if the file is not a regular file (i.e.
          block devices, directories, etc). In theory, this value could be set
          to point to a block containing extended attributes of the directory or
          special file.
        </q>
      </>
    )),
  },
  {
    id: "i_faddr",
    offset: 112,
    size: 4,
    description: "i_faddr",
    info: $(() => (
      <>
        <p>32bit value indicating the location of the file fragment.</p>
        <q>
          In Linux and GNU HURD, since fragments are unsupported this value is
          always 0. In Ext4 this value is now marked as obsolete. In theory,
          this should contain the block number which hosts the actual fragment.
          The fragment number and its size would be contained in the{" "}
          <a href="/ext2/inode-table#i_osd2">i_osd2</a>
          structure.
        </q>
      </>
    )),
  },
  {
    id: "i_osd2",
    offset: 116,
    size: 12,
    description: "i_osd2",
    info: $(() => <></>),
  },
];
