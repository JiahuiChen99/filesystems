import { $ } from "@builder.io/qwik";
import { EXT2Table } from "~/components/UI/table/table";
import { type EXT2 } from "~/typings/ext2";
import { sstateData } from "./data/sstateData";
import { sserrorsData } from "./data/serrorsData";
import { sfeaturecompatData } from "./data/sfeaturecompatData";
import { screatorosData } from "./data/screatorosData";
import { srevlevelData } from "./data/srevlevelData";
import { sfeatureincompatData } from "./data/sfeatureincompatData";
import { sfeaturerocompatData } from "./data/sfeaturerocompatData";
import { salgobitmapData } from "./data/salgobitmapData";

export const superblockData: EXT2.Struct[] = [
  {
    id: "s_inodes_count",
    offset: 0,
    size: 4,
    description: "s_inodes_count",
    info: $(() => (
      <p>
        32bit value indicating the total number of inodes, both used and free,
        in the file system. This value must be lower or equal to
        (s_inodes_per_group * number of block groups). It must be equal to the
        sum of the inodes defined in each block group.
      </p>
    )),
  },
  {
    id: "s_blocks_count",
    offset: 4,
    size: 4,
    description: "s_blocks_count",
    info: $(() => (
      <p>
        32bit value indicating the total number of blocks in the system
        including all used, free and reserved. This value must be lower or equal
        to (s_blocks_per_group * number of block groups). It can be lower than
        the previous calculation if the last block group has a smaller number of
        blocks than s_blocks_per_group du to volume size. It must be equal to
        the sum of the blocks defined in each block group.
      </p>
    )),
  },
  {
    id: "s_r_blocks_count",
    offset: 8,
    size: 4,
    description: "s_r_blocks_count",
    info: $(() => (
      <p>
        32bit value indicating the total number of blocks reserved for the usage
        of the super user. This is most useful if for some reason a user,
        maliciously or not, fill the file system to capacity; the super user
        will have this specified amount of free blocks at his disposal so he can
        edit and save configuration files.
      </p>
    )),
  },
  {
    id: "s_free_blocks_count",
    offset: 12,
    size: 4,
    description: "s_free_blocks_count",
    info: $(() => (
      <p>
        32bit value indicating the total number of free blocks, including the
        number of reserved blocks (see{" "}
        <a href="#s_r_blocks_count">s_r_blocks_count</a>). This is a sum of all
        free blocks of all the block groups.
      </p>
    )),
  },
  {
    id: "s_free_inodes_count",
    offset: 16,
    size: 4,
    description: "s_free_inodes_count",
    info: $(() => (
      <p>
        32bit value indicating the total number of free inodes. This is a sum of
        all free inodes of all the block groups.
      </p>
    )),
  },
  {
    id: "s_first_data_block",
    offset: 20,
    size: 4,
    description: "s_first_data_block",
    info: $(() => (
      <>
        <p>
          32bit value identifying the first data block, in other word the id of
          the block containing the superblock structure.
        </p>
        <i>
          Note that this value is always 0 for file systems with a block size
          larger than 1KB, and always 1 for file systems with a block size of
          1KB. The superblock is always starting at the 1024th byte of the disk,
          which normally happens to be the first byte of the 3rd sector.
        </i>
      </>
    )),
  },
  {
    id: "s_log_block_size",
    offset: 24,
    size: 4,
    description: "s_log_block_size",
    info: $(() => (
      <>
        <p>
          The block size is computed using this 32bit value as the number of
          bits to shift left the value 1024. This value may only be
          non-negative.
        </p>
        <code>
          <pre>block size = 1024 s_log_block_size;</pre>
        </code>
        <p>
          Common block sizes include 1KiB, 2KiB, 4KiB and 8Kib. For information
          about the impact of selecting a block size, see{" "}
          <a href="#impact-of-block-size">Impact of Block Sizes.</a>
        </p>
        <q>
          In Linux, at least up to 2.6.28, the block size must be at least as
          large as the sector size of the block device, and cannot be larger
          than the supported memory page of the architecture.
        </q>
      </>
    )),
  },
  {
    id: "s_log_frag_size",
    offset: 28,
    size: 4,
    description: "s_log_frag_size",
    info: $(() => (
      <>
        <p>
          The fragment size is computed using this 32bit value as the number of
          bits to shift left the value 1024. Note that a negative value would
          shift the bit right rather than left.
        </p>
        <code>
          <pre>{`if( positive )
 fragmnet size = 1024 << s_log_frag_size;
else
 framgnet size = 1024 >> -s_log_frag_size;`}</pre>
        </code>
        <q>
          As of Linux 2.6.28 no support exists for an Ext2 partition with
          fragment size smaller than the block size, as this feature seems to
          not be available.
        </q>
      </>
    )),
  },
  {
    id: "s_blocks_per_group",
    offset: 32,
    size: 4,
    description: "s_blocks_per_group",
    info: $(() => (
      <p>
        32bit value indicating the total number of blocks per group. This value
        in combination with <a href="#s_first_data_block">s_first_data_block</a>{" "}
        can be used to determine the block groups boundaries. Due to volume size
        boundaries, the last block group might have a smaller number of blocks
        than what is specified in this field
      </p>
    )),
  },
  {
    id: "s_frags_per_group",
    offset: 36,
    size: 4,
    description: "s_frags_per_group",
    info: $(() => (
      <p>
        32bit value indicating the total number of fragments per group. It is
        also used to determine the size of the block bitmap of each block group.
      </p>
    )),
  },
  {
    id: "s_inodes_per_group",
    offset: 40,
    size: 4,
    description: "s_inodes_per_group",
    info: $(() => (
      <p>
        32bit value indicating the total number of inodes per group. This is
        also used to determine the size of the inode bitmap of each block group.
        Note that you cannot have more than (block size in bytes * 8) inodes per
        group as the inode bitmap must fit within a single block. This value
        must be a perfect multiple of the number of inodes that can fit in a
        block <code>{`((1024<<s_log_block_size)/s_inode_size)`}</code>.
      </p>
    )),
  },
  {
    id: "s_mtime",
    offset: 44,
    size: 4,
    description: "s_mtime",
    info: $(() => (
      <p>
        Unix time, as defined by POSIX, of the last time the file system was
        mounted.
      </p>
    )),
  },
  {
    id: "s_wtime",
    offset: 48,
    size: 4,
    description: "s_wtime",
    info: $(() => (
      <p>
        Unix time, as defined by POSIX, of the last write access to the file
        system.
      </p>
    )),
  },
  {
    id: "s_mnt_count",
    offset: 52,
    size: 2,
    description: "s_mnt_count",
    info: $(() => (
      <p>
        16bit value indicating how many time the file system was mounted since
        the last time it was fully verified
      </p>
    )),
  },
  {
    id: "s_max_mnt_count",
    offset: 54,
    size: 2,
    description: "s_max_mnt_count",
    info: $(() => (
      <p>
        16bit value indicating the maximum number of times that the file system
        may be mounted before a full check is performed
      </p>
    )),
  },
  {
    id: "s_magic",
    offset: 56,
    size: 2,
    description: "s_magic",
    info: $(() => (
      <p>
        16bit value identifying the file system as Ext2. The value is currently
        fixed to EXT2_SUPER_MAGIC of value 0xEF53.
      </p>
    )),
  },
  {
    id: "s_state",
    offset: 58,
    size: 2,
    description: "s_state",
    info: $(() => (
      <>
        <p>
          16bit value indicating the file system state. When the file system is
          mounted, this state is set to EXT2_ERROR_FS. After the file system was
          cleanly unmounted, this value is set to EXT2_VALID_FS.
        </p>
        <p>
          When mounting the file system, if a valid of EXT2_ERROR_FS is
          encountered it means the file system was not cleanly unmounted and
          most likely contain errors that will need to be fixed. Typically under
          Linux this means running fsck.
        </p>
        <EXT2Table data={sstateData} />
      </>
    )),
  },
  {
    id: "s_errors",
    offset: 60,
    size: 2,
    description: "s_errors",
    info: $(() => (
      <>
        <p>
          16bit value indicating what the file system driver should do when an
          error is detected. The following values have been defined:
        </p>
        <EXT2Table data={sserrorsData} />
      </>
    )),
  },
  {
    id: "s_minor_rev_level",
    offset: 62,
    size: 2,
    description: "s_minor_rev_level",
    info: $(() => (
      <p>
        16bit value identifying the minor revision level within its{" "}
        <a href="#revision-level">revision level</a>.
      </p>
    )),
  },
  {
    id: "s_lastcheck",
    offset: 64,
    size: 4,
    description: "s_lastcheck",
    info: $(() => (
      <p>Unix time, as defined by POSIX, of the last file system check.</p>
    )),
  },
  {
    id: "s_checkinterval",
    offset: 68,
    size: 4,
    description: "s_checkinterval",
    info: $(() => (
      <p>
        Maximum Unix time interval, as defined by POSIX, allowed between file
        system checks.
      </p>
    )),
  },
  {
    id: "s_creator_os",
    offset: 72,
    size: 4,
    description: "s_creator_os",
    info: $(() => (
      <>
        <p>
          32bit identifier of the os that created the file system. Defined
          values are:
        </p>
        <EXT2Table data={screatorosData} />
      </>
    )),
  },
  {
    id: "s_rev_level",
    offset: 76,
    size: 4,
    description: "s_rev_level",
    info: $(() => (
      <>
        <p>32bit revision level value.</p>
        <EXT2Table data={srevlevelData} />
      </>
    )),
  },
  {
    id: "s_def_resuid",
    offset: 80,
    size: 2,
    description: "s_def_resuid",
    info: $(() => (
      <>
        <p>16bit value used as the default user id for reserved blocks.</p>
        <q>
          In Linux this defaults to <code>EXT2_DEF_RESUID</code> of 0
        </q>
      </>
    )),
  },
  {
    id: "s_def_resgid",
    offset: 82,
    size: 2,
    description: "s_def_resgid",
    info: $(() => (
      <>
        <p>16bit value used as the default group id for reserved blocks.</p>
        <q>
          In Linux this defaults to <code>EXT2_DEF_RESGID</code> of 0
        </q>
      </>
    )),
  },
];

export const superblockExtendedData: EXT2.Struct[] = [
  {
    id: "s_first_ino",
    offset: 84,
    size: 4,
    description: "s_first_ino",
    info: $(() => (
      <p>
        32bit value used as index to the first inode useable for standard files.
        In revision 0, the first non-reserved inode is fixed to 11
        (EXT2_GOOD_OLD_FIRST_INO). In revision 1 and later this value may be set
        to any value.
      </p>
    )),
  },
  {
    id: "s_inode_size",
    offset: 88,
    size: 2,
    description: "s_inode_size",
    info: $(() => (
      <p>
        16bit value indicating the size of the inode structure. In revision 0,
        this value is always 128 (EXT2_GOOD_OLD_INODE_SIZE). In revision 1 and
        later, this value must be a perfect power of 2 and must be smaller or
        equal to the block size {`(1<<s_log_block_size)`}.
      </p>
    )),
  },
  {
    id: "s_block_group_nr",
    offset: 90,
    size: 2,
    description: "s_block_group_nr",
    info: $(() => (
      <p>
        16bit value used to indicate the block group number hosting this
        superblock structure. This can be used to rebuild the file system from
        any superblock backup.
      </p>
    )),
  },
  {
    id: "s_feature_compat",
    offset: 92,
    size: 4,
    description: "s_feature_compat",
    info: $(() => (
      <>
        <p>
          32bit bitmask of compatible features. The file system implementation
          is free to support them or not without risk of damaging the meta-data.
        </p>
        <EXT2Table data={sfeaturecompatData} />
      </>
    )),
  },
  {
    id: "s_feature_incompat",
    offset: 96,
    size: 4,
    description: "s_feature_incompat",
    info: $(() => (
      <>
        <p>
          32bit bitmask of incompatible features. The file system implementation
          should refuse to mount the file system if any of the indicated feature
          is unsupported.
        </p>
        <p>
          An implementation not supporting these features would be unable to
          properly use the file system. For example, if compression is being
          used and an executable file would be unusable after being read from
          the disk if the system does not know how to uncompress it.
        </p>
        <EXT2Table data={sfeatureincompatData} />
      </>
    )),
  },
  {
    id: "s_feature_ro_compat",
    offset: 100,
    size: 4,
    description: "s_feature_ro_compat",
    info: $(() => (
      <>
        <p>
          32bit bitmask of “read-only” features. The file system implementation
          should mount as read-only if any of the indicated feature is
          unsupported.
        </p>
        <EXT2Table data={sfeaturerocompatData} />
      </>
    )),
  },
  {
    id: "s_uuid",
    offset: 104,
    size: 16,
    description: "s_uuid",
    info: $(() => (
      <p>
        128bit value used as the volume id. This should, as much as possible, be
        unique for each file system formatted.
      </p>
    )),
  },
  {
    id: "s_volume_name",
    offset: 120,
    size: 16,
    description: "s_volume_name",
    info: $(() => (
      <p>
        16 bytes volume name, mostly unusued. A valid volume name would consist
        of only ISO-Latin-1 characters and be 0 terminated
      </p>
    )),
  },
  {
    id: "s_last_mounted",
    offset: 136,
    size: 64,
    description: "s_last_mounted",
    info: $(() => (
      <p>
        64 bytes directory path where the file system was last mounted. While
        not normally used, it could serve for auto-finding the mountpoint when
        not indicated on the command line. Again the path should be zero
        terminated for compatibility reasons. Valid path is constructed from
        ISO-Latin-1 characters.
      </p>
    )),
  },
  {
    id: "s_algo_bitmap",
    offset: 200,
    size: 4,
    description: "s_algo_bitmap",
    info: $(() => (
      <>
        <p>
          32bit value used by compression algorithms to determine the
          compression method(s) used.
        </p>
        <q>
          Compression is supported in Linux 2.4 and 2.6 via the e2compr patch.
          For more information, visit http://e2compr.sourceforge.net/
        </q>
        <EXT2Table data={salgobitmapData} />
      </>
    )),
  },
  {
    id: "s_prealloc_blocks",
    offset: 204,
    size: 1,
    description: "s_prealloc_blocks",
    info: $(() => (
      <>
        <p>
          8-bit value representing the number of blocks the implementation
          should attempt to pre-allocate when creating a new regular file.
        </p>
        <q>
          Linux 2.6.28 will only perform pre-allocation using Ext4 although no
          problem is expected if any version of Linux encounters a file with
          more blocks present than required.
        </q>
      </>
    )),
  },
  {
    id: "s_prealloc_dir_blocks",
    offset: 205,
    size: 1,
    description: "s_prealloc_dir_blocks",
    info: $(() => (
      <>
        <p>
          8-bit value representing the number of blocks the implementation
          should attempt to pre-allocate when creating a new directory.
        </p>
        <q>
          Linux 2.6.28 will only perform pre-allocation using Ext4 and only if
          the EXT4_FEATURE_COMPAT_DIR_PREALLOC flag is present. Since Linux does
          not de-allocate blocks from directories after they were allocated, it
          should be safe to perform pre-allocation and maintain compatibility
          with Linux.
        </q>
      </>
    )),
  },
  { id: "alignment", offset: 206, size: 2, description: "(alignment)" },
  {
    id: "s_journal_uuid",
    offset: 208,
    size: 16,
    description: "s_journal_uuid",
    info: $(() => (
      <p>
        16-byte value containing the uuid of the journal superblock. See Ext3
        Journaling for more information
      </p>
    )),
  },
  {
    id: "s_journal_inum",
    offset: 224,
    size: 16,
    description: "s_journal_inum",
    info: $(() => (
      <p>
        32-bit inode number of the journal file. See Ext3 Journaling for more
        information.
      </p>
    )),
  },
  {
    id: "s_journal_dev",
    offset: 228,
    size: 4,
    description: "s_journal_dev",
    info: $(() => (
      <p>
        32-bit device number of the journal file. See Ext3 Journaling for more
        information.
      </p>
    )),
  },
  {
    id: "s_last_orphan",
    offset: 232,
    size: 4,
    description: "s_last_orphan",
    info: $(() => (
      <p>
        32-bit inode number, pointing to the first inode in the list of inodes
        to delete. See Ext3 Journaling for more information
      </p>
    )),
  },
  {
    id: "s_hash_seed",
    offset: 236,
    size: 4,
    description: "s_hash_seed",
    info: $(() => (
      <p>
        An array of 4 32bit values containing the seeds used for the hash
        algorithm for directory indexing.
      </p>
    )),
  },
  {
    id: "s_def_hash_version",
    offset: 252,
    size: 1,
    description: "s_def_hash_version",
    info: $(() => (
      <p>
        An 8bit value containing the default hash version used for directory
        indexing.An 8bit value containing the default hash version used for
        directory indexing.
      </p>
    )),
  },
  {
    id: "padding",
    offset: 253,
    size: 3,
    description: "padding - reserved for future expansion",
  },
  {
    id: "s_default_mount_options",
    offset: 256,
    size: 4,
    description: "s_default_mount_options",
    info: $(() => (
      <p>
        A 32bit value containing the default mount options for this file system.
        TODO: Add more information here!
      </p>
    )),
  },
  {
    id: "s_first_meta_bg",
    offset: 260,
    size: 4,
    description: "s_first_meta_bg",
    info: $(() => (
      <p>
        A 32bit value indicating the block group ID of the first meta block
        group. TODO: Research if this is an Ext3-only extension.
      </p>
    )),
  },
  {
    id: "unused",
    offset: 264,
    size: 760,
    description: "unused - reserved for future revisions",
  },
];
