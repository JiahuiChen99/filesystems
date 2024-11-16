import { FAT16 } from "@/app/fat-16/types/fat-16";
import { CanvasDTO } from "@/dto/canvas";

export const fat16RootDirData: { [key: string]: FAT16.Struct } = {
  dir_name: {
    id: "dir_name",
    name: "DIR_Name",
    offset: 0,
    size: 11,
    info: (
      <>
        <p>Short name</p>
        <p>
          Special notes about the first byte (DIR_Name[0]) of a FAT directory
          entry:
        </p>
        <p>
          • If DIR_Name[0] == 0xE5, then the directory entry is free (there is
          no file or directory name in this entry).
        </p>
        <p>
          • If DIR_Name[0] == 0x00, then the directory entry is free (same as
          for 0xE5), and there are no allocated directory entries after this one
          (all of the DIR_Name[0] bytes in all of the entries after this one are
          also set to 0). The special 0 value, rather than the 0xE5 value,
          indicates to FAT file system driver code that the rest of the entries
          in this directory do not need to be examined because they are all
          free.
        </p>
        <p>
          • If DIR_Name[0] == 0x05, then the actual file name character for this
          byte is 0xE5. 0xE5 is actually a valid KANJI lead byte value for the
          character set used in Japan. The special 0x05 value is used so that
          this special file name case for Japan can be handled properly and not
          cause FAT file system code to think that the entry is free.
        </p>
        <p>
          The DIR_Name field is actually broken into two parts+ the 8-character
          main part of the name, and the 3-character extension. These two parts
          are “trailing space padded” with bytes of 0x20. DIR_Name[0] may not
          equal 0x20.
        </p>
        <p>
          There is an implied ‘.’ character between the main part of the name
          and the extension part of the name that is not present in DIR_Name.
          Lower case characters are not allowed in DIR_Name (what these
          characters are is country specific).
        </p>
        <p>
          The following characters are not legal in any bytes of DIR_Name: •
          Values less than 0x20 except for the special case of 0x05 in
          DIR_Name[0] described above. • 0x22, 0x2A, 0x2B, 0x2C, 0x2E, 0x2F,
          0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x5B, 0x5C, 0x5D, and 0x7C.
        </p>
        <p>
          Here are some examples of how a user-entered name maps into DIR_Name:
        </p>
        <div>
          “foo.bar” : “FOO BAR” “FOO.BAR” : “FOO BAR” “Foo.Bar” : “FOO BAR”
          “foo” : “FOO “ “foo.” : “FOO “ “PICKLE.A” : “PICKLE A “ “prettybg.big”
          : “PRETTYBGBIG” “.big” : illegal, DIR_Name[0] cannot be 0x20
        </div>
        <p>
          In FAT directories all names are unique. Look at the first three
          examples earlier. Those different names all refer to the same file,
          and there can only be one file with DIR_Name set to “FOO BAR” in any
          directory.
        </p>
      </>
    ),
  },
  dir_attr: {
    id: "dir_attr",
    name: "DIR_Attr",
    offset: 11,
    size: 1,
    info: (
      <>
        <p>DIR_Attr specifies attributes of the file:</p>
        <p>
          ATTR_READ_ONLY Indicates that writes to the file should fail.
          ATTR_HIDDEN Indicates that normal directory listings should not show
          this file. ATTR_SYSTEM Indicates that this is an operating system
          file. ATTR_VOLUME_ID There should only be one “file” on the volume
          that has this attribute set, and that file must be in the root
          directory. This name of this file is actually the label for the
          volume. DIR_FstClusHI and DIR_FstClusLO must always be 0 for the
          volume label (no data clusters are allocated to the volume label
          file). ATTR_DIRECTORY Indicates that this file is actually a container
          for other files. ATTR_ARCHIVE This attribute supports backup
          utilities. This bit is set by the FAT file system driver when a file
          is created, renamed, or written to. Backup utilities may use this
          attribute to indicate which files on the volume have been modified
          since the last time that a backup was performed ATTR_LONG_NAME
          ATTR_LONG_NAME | ATTR_READ_ONLY | ATTR_HIDDEN | ATTR_SYSTEM |
          ATTR_VOLUME_ID
        </p>
        <p>
          Note that the ATTR_LONG_NAME attribute bit combination indicates that
          the “file” is actually part of the long name entry for some other
          file. See the FAT Long Filename specification for more information on
          this attribute combination.
        </p>
        <p>
          The upper two bits of the attribute byte are reserved and should
          always be set to 0 when a file is created and never modified or looked
          at after that
        </p>
        <p>
          When a directory is created, a file with the ATTR_DIRECTORY bit set in
          its DIR_Attr field, you set its DIR_FileSize to 0. DIR_FileSize is not
          used and is always 0 on a file with the ATTR_DIRECTORY attribute
          (directories are sized by simply following their cluster chains to the
          EOC mark). One cluster is allocated to the directory (unless it is the
          root directory on a FAT16/FAT12 volume), and you set DIR_FstClusLO and
          DIR_FstClusHI to that cluster number and place an EOC mark in that
          clusters entry in the FAT. Next, you initialize all bytes of that
          cluster to 0. If the directory is the root directory, you are done
          (there are no dot or dotdot entries in the root directory). If the
          directory is not the root directory, you need to create two special
          entries in the first two 32-byte directory entries of the directory
          (the first two 32 byte entries in the data region of the cluster you
          just allocated).
        </p>
      </>
    ),
  },
  dir_ntres: {
    id: "dir_ntres",
    name: "DIR_NTRes",
    offset: 12,
    size: 1,
    info: (
      <>
        <p>
          Reserved for use by Windows NT. Set value to 0 when a file is created
          and never modify or look at it after that.
        </p>
      </>
    ),
  },
  dir_crttimetenth: {
    id: "dir_crttimetenth",
    name: "DIR_CrtTimeTenth",
    offset: 13,
    size: 1,
    info: (
      <>
        <p>
          Millisecond stamp at file creation time. This field actually contains
          a count of tenths of a second. The granularity of the seconds part of
          DIR_CrtTime is 2 seconds so this field is a count of tenths of a
          second and its valid value range is 0-199 inclusive.
        </p>
      </>
    ),
  },
  dir_crttime: {
    id: "dir_crttime",
    name: "DIR_CrtTime",
    offset: 14,
    size: 2,
    info: (
      <>
        <p>Time file was created.</p>
      </>
    ),
  },
  dir_crtdate: {
    id: "dir_crtdate",
    name: "DIR_CrtDate",
    offset: 16,
    size: 2,
    info: (
      <>
        <p>Date file was created.</p>
      </>
    ),
  },
  dir_lstaccdate: {
    id: "dir_lstaccdate",
    name: "DIR_LstAccDate",
    offset: 18,
    size: 2,
    info: (
      <>
        <p>
          Last access date. Note that there is no last access time, only a date.
          This is the date of last read or write. In the case of a write, this
          should be set to the same date as DIR_WrtDate.
        </p>
      </>
    ),
  },
  dir_fstclushi: {
    id: "dir_fstclushi",
    name: "DIR_FstClusHI",
    offset: 20,
    size: 2,
    info: (
      <>
        <p>
          High word of this entry’s first cluster number (always 0 for a FAT12
          or FAT16 volume).
        </p>
      </>
    ),
  },
  dir_wrttime: {
    id: "dir_wrttime",
    name: "DIR_WrtTime",
    offset: 22,
    size: 2,
    info: (
      <>
        <p>Time of last write. Note that file creation is considered a write</p>
      </>
    ),
  },
  dir_wrtdate: {
    id: "dir_wrtdate",
    name: "DIR_WrtDate",
    offset: 24,
    size: 2,
    info: (
      <>
        <p>
          Date of last write. Note that file creation is considered a write.
        </p>
      </>
    ),
  },
  dir_fstcluslo: {
    id: "dir_fstcluslo",
    name: "DIR_FstClusLO",
    offset: 26,
    size: 2,
    info: (
      <>
        <p>Low word of this entry&apos;s first cluster number.</p>
      </>
    ),
  },
  dir_filesize: {
    id: "dir_filesize",
    name: "DIR_FileSize",
    offset: 28,
    size: 4,
    info: (
      <>
        <p>32-bit DWORD holding this file&apos;s size in bytes.</p>
      </>
    ),
  },
};

const decodeDataToNodeData = (
  data: FAT16.Struct
): CanvasDTO.Data<CanvasDTO.SizeAndOffset> => {
  const { offset, size, name } = data;
  return {
    id: name,
    name,
    metadata: {
      group: "root-directory",
    },
    offset,
    offsetUnits: "byte",
    size,
    units: "byte",
  };
};

// Adapted data for Canvas
export const fat16RootDirDataCanvas: Array<
  CanvasDTO.Data<CanvasDTO.SizeAndOffset>
> = [...Object.values(fat16RootDirData).map(decodeDataToNodeData)];
