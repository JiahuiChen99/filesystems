import { EXT2 } from "@/app/(file-systems)/ext-2/types/ext-2";

export const iosd2HurdData: EXT2.Struct[] = [
  {
    id: "h_i_frag",
    offset: 0,
    size: 1,
    description: "h_i_frag",
    info: (
      <p>
        8bit fragment number. Always 0 GNU HURD since fragments are not
        supported. Obsolete with Ext4.
      </p>
    ),
  },
  {
    id: "h_i_fsize",
    offset: 1,
    size: 1,
    description: "h_i_fsize",
    info: (
      <p>
        8bit fragment size. Always 0 in GNU HURD since fragments are not
        supported. Obsolete with Ext4.
      </p>
    ),
  },
  {
    id: "h_i_mode_high",
    offset: 2,
    size: 2,
    description: "h_i_mode_high",
    info: <p>High 16bit of the 32bit mode.</p>,
  },
  {
    id: "h_i_uid_high",
    offset: 4,
    size: 2,
    description: "h_i_uid_high",
    info: (
      <p>
        High 16bit of <a href="/ext-2/inode-table#i_uid">user_id</a>.
      </p>
    ),
  },
  {
    id: "h_i_gid_high",
    offset: 6,
    size: 2,
    description: "h_i_gid_high",
    info: (
      <p>
        High 16bit of <a href="/ext-2/inode-table#i_gid">group_id</a>.
      </p>
    ),
  },
  {
    id: "h_i_author",
    offset: 8,
    size: 4,
    description: "h_i_author",
    info: (
      <p>
        32bit user id of the assigned file author. If this value is set to -1,
        the POSIX <a href="/ext-2/inode-table#i_uid">user_id</a> will be used.
      </p>
    ),
  },
];

export const iosd2LinuxData: EXT2.Struct[] = [
  {
    id: "l_i_frag",
    offset: 0,
    size: 1,
    description: "l_i_frag",
    info: (
      <>
        <p>8bit fragment number.</p>
        <q>Always 0 in Linux since fragments are not supported.</q>
        <q>
          A new implementation of Ext2 should completely disregard this field if
          the i_faddr value is 0; in Ext4 this field is combined with l_i_fsize
          to become the high 16bit of the 48bit blocks count for the inode data.
        </q>
      </>
    ),
  },
  {
    id: "l_i_fsize",
    offset: 1,
    size: 1,
    description: "l_i_fsize",
    info: (
      <>
        <p>8bit fragment size.</p>
        <q>Always 0 in Linux since fragments are not supported.</q>
        <q>
          A new implementation of Ext2 should completely disregard this field if
          the i_faddr value is 0; in Ext4 this field is combined with l_i_frag
          to become the high 16bit of the 48bit blocks count for the inode data.
        </q>
      </>
    ),
  },
  {
    id: "reserved",
    offset: 2,
    size: 2,
    description: "reserved",
  },
  {
    id: "l_i_uid_high",
    offset: 4,
    size: 2,
    description: "l_i_uid_high",
    info: (
      <p>
        High 16bit of <a href="/ext-2/inode-table#i_uid">user_id</a>.
      </p>
    ),
  },
  {
    id: "l_i_gid_high",
    offset: 6,
    size: 2,
    description: "l_i_gid_high",
    info: (
      <p>
        High 16bit of <a href="/ext-2/inode-table#i_gid">group_id</a>.
      </p>
    ),
  },
  {
    id: "reserved",
    offset: 8,
    size: 4,
    description: "reserved",
  },
];

export const iosd2MasixData: EXT2.Struct[] = [
  {
    id: "m_i_frag",
    offset: 0,
    size: 1,
    description: "m_i_frag",
    info: (
      <p>
        8bit fragment number. Always 0 in Masix as framgents are not supported.
        Obsolete with Ext4.
      </p>
    ),
  },
  {
    id: "m_i_fsize",
    offset: 1,
    size: 1,
    description: "m_i_fsize",
    info: (
      <p>
        8bit fragment size. Always 0 in Masix as fragments are not supported.
        Obsolete with Ext4.
      </p>
    ),
  },
  {
    id: "reserved",
    offset: 2,
    size: 1,
    description: "reserved",
  },
];
