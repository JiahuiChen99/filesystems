import { FAT16 } from "@/app/fat16/types/fat16";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";

export const fat16ReservedAreaData: { [key: string]: FAT16.Struct } = {
  bpb_jmpboot: {
    id: "BS_jmpBoot",
    name: "BS_jmpBoot",
    offset: 0,
    size: 3,
    info: (
      <>
        <p>Jump instruction to boot code. This field has two allowed forms:</p>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          jmpBoot[0] = 0xEB, jmpBoot[1] = 0x??, jmpBoot[2] = 0x90
        </div>
        <div>and</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          jmpBoot[0] = 0xE9, jmpBoot[1] = 0x??, jmpBoot[2] = 0x??
        </div>
        <p>
          0x?? indicates that any 8-bit value is allowed in that byte. What this
          forms is a three-byte Intel x86 unconditional branch (jump)
          instruction that jumps to the start of the operating system bootstrap
          code. This code typically occupies the rest of sector 0 of the volume
          following the BPB and possibly other sectors. Either of these forms is
          acceptable. JmpBoot[0] = 0xEB is the more frequently used format.
        </p>
      </>
    ),
  },
  bpb_oemname: {
    id: "BS_OEMName",
    name: "BS_OEMName",
    offset: 3,
    size: 8,
    info: (
      <p>
        “MSWIN4.1” There are many misconceptions about this field. It is only a
        name string. Microsoft operating systems don&apos;t pay any attention to
        this field. Some FAT drivers do. This is the reason that the indicated
        string, “MSWIN4.1”, is the recommended setting, because it is the
        setting least likely to cause compatibility problems. If you want to put
        something else in here, that is your option, but the result may be that
        some FAT drivers might not recognize the volume. Typically this is some
        indication of what system formatted the volume.
      </p>
    ),
  },
  bpb_bytspersec: {
    id: "BPB_BytsPerSec",
    name: "BPB_BytsPerSec",
    offset: 11,
    size: 2,
    info: (
      <p>
        Count of bytes per sector. This value may take on only the following
        values: 512, 1024, 2048 or 4096. If maximum compatibility is desired,
        only the value 512 should be used. There is a lot of FAT code in the
        world that is basically “hard wired” to 512 bytes per sector and
        doesn&apos;t bother to check this field to make sure it is 512.
        Microsoft operating systems will properly support 1024, 2048, and 4096,
        but these values are not recommended.
      </p>
    ),
  },
  bpb_secperclus: {
    id: "BPB_SecPerClus",
    name: "BPB_SecPerClus",
    offset: 13,
    size: 1,
    info: (
      <p>
        Number of sectors per allocation unit. This value must be a power of 2
        that is greater than 0. The legal values are 1, 2, 4, 8, 16, 32, 64, and
        128. Note however, that a value should never be used that results in a
        “bytes per cluster” value (BPB_BytsPerSec * BPB_SecPerClus) greater than
        32K (32 * 1024). There is a misconception that values greater than this
        are OK. Values that cause a cluster size greater than 32K bytes do not
        work properly; do not try to define one. Some versions of some systems
        allow 64K bytes per cluster value. Many application setup programs will
        not work correctly on such a FAT volume.
      </p>
    ),
  },
  bpb_rsvdseccnt: {
    id: "BPB_RsvdSecCnt",
    name: "BPB_RsvdSecCnt",
    offset: 14,
    size: 2,
    info: (
      <p>
        Number of reserved sectors in the Reserved region of the volume starting
        at the first sector of the volume. This field must not be 0. For FAT12
        and FAT16 volumes, this value should never be anything other than 1. For
        FAT32 volumes, this value is typically 32. There is a lot of FAT code in
        the world “hard wired” to 1 reserved sector for FAT12 and FAT16 volumes
        and that doesn’t bother to check this field to make sure it is 1.
        Microsoft operating systems will properly support any non-zero value in
        this field.
      </p>
    ),
  },
  bpb_numfats: {
    id: "BPB_NumFATs",
    name: "BPB_NumFATs",
    offset: 16,
    size: 1,
    info: (
      <>
        <p>
          The count of FAT data structures on the volume. This field should
          always contain the value 2 for any FAT volume of any type. Although
          any value greater than or equal to 1 is perfectly valid, many software
          programs and a few operating systems’ FAT file system drivers may not
          function properly if the value is something other than 2. All
          Microsoft file system drivers will support a value other than 2, but
          it is still highly recommended that no value other than 2 be used in
          this field.
        </p>
        <p>
          The reason the standard value for this field is 2 is to provide redun-
          dancy for the FAT data structure so that if a sector goes bad in one
          of the FATs, that data is not lost because it is duplicated in the
          other FAT. On non-disk-based media, such as FLASH memory cards, where
          such redundancy is a useless feature, a value of 1 may be used to save
          the space that a second copy of the FAT uses, but some FAT file system
          drivers might not recognize such a volume properly.
        </p>
      </>
    ),
  },
  bpb_rootentcnt: {
    id: "BPB_RootEntCnt",
    name: "BPB_RootEntCnt",
    offset: 17,
    size: 2,
    info: (
      <p>
        For FAT12 and FAT16 volumes, this field contains the count of 32- byte
        directory entries in the root directory. For FAT32 volumes, this field
        must be set to 0. For FAT12 and FAT16 volumes, this value should always
        specify a count that when multiplied by 32 results in an even multiple
        of BPB_BytsPerSec. For maximum compatibility, FAT16 volumes should use
        the value 512.
      </p>
    ),
  },
  bpb_totsec16: {
    id: "BPB_TotSec16",
    name: "BPB_TotSec16",
    offset: 19,
    size: 2,
    info: (
      <p>
        This field is the old 16-bit total count of sectors on the volume. This
        count includes the count of all sectors in all four regions of the
        volume. This field can be 0; if it is 0, then BPB_TotSec32 must be
        non-zero. For FAT32 volumes, this field must be 0. For FAT12 and FAT16
        volumes, this field contains the sector count, and BPB_TotSec32 is 0 if
        the total sector count “fits” (is less than 0x10000).
      </p>
    ),
  },
  bpb_media: {
    id: "BPB_Media",
    name: "BPB_Media",
    offset: 21,
    size: 1,
    info: (
      <p>
        0xF8 is the standard value for “fixed” (non-removable) media. For
        removable media, 0xF0 is frequently used. The legal values for this
        field are 0xF0, 0xF8, 0xF9, 0xFA, 0xFB, 0xFC, 0xFD, 0xFE, and 0xFF. The
        only other important point is that whatever value is put in here must
        also be put in the low byte of the FAT[0] entry. This dates back to the
        old MS-DOS 1.x media determination noted earlier and is no longer
        usually used for anything.
      </p>
    ),
  },
  bpb_fatsz16: {
    id: "BPB_FATSz16",
    name: "BPB_FATSz16",
    offset: 22,
    size: 2,
    info: (
      <p>
        This field is the FAT12/FAT16 16-bit count of sectors occupied by ONE
        FAT. On FAT32 volumes this field must be 0, and BPB_FATSz32 contains the
        FAT size count.
      </p>
    ),
  },
  bpb_secpertrk: {
    id: "BPB_SecPerTrk",
    name: "BPB_SecPerTrk",
    offset: 24,
    size: 2,
    info: (
      <p>
        Sectors per track for interrupt 0x13. This field is only relevant for
        media that have a geometry (volume is broken down into tracks by
        multiple heads and cylinders) and are visible on interrupt 0x13. This
        field contains the “sectors per track” geometry value.
      </p>
    ),
  },
  bpb_numheads: {
    id: "BPB_NumHeads",
    name: "BPB_NumHeads",
    offset: 26,
    size: 2,
    info: (
      <p>
        Number of heads for interrupt 0x13. This field is relevant as discussed
        earlier for BPB_SecPerTrk. This field contains the one based “count of
        heads”. For example, on a 1.44 MB 3.5-inch floppy drive this value is 2.
      </p>
    ),
  },
  bpb_hiddsec: {
    id: "BPB_HiddSec",
    name: "BPB_HiddSec",
    offset: 28,
    size: 4,
    info: (
      <p>
        Count of hidden sectors preceding the partition that contains this FAT
        volume. This field is generally only relevant for media visible on
        interrupt 0x13. This field should always be zero on media that are not
        partitioned. Exactly what value is appropriate is operating system
        specific.
      </p>
    ),
  },
  bpb_totsec32: {
    id: "BPB_TotSec32",
    name: "BPB_TotSec32",
    offset: 32,
    size: 4,
    info: (
      <p>
        This field is the new 32-bit total count of sectors on the volume. This
        count includes the count of all sectors in all four regions of the
        volume. This field can be 0; if it is 0, then BPB_TotSec16 must be
        non-zero. For FAT32 volumes, this field must be non-zero. For
        FAT12/FAT16 volumes, this field contains the sector count if
        BPB_TotSec16 is 0 (count is greater than or equal to 0x10000).
      </p>
    ),
  },
  bs_drvnum: {
    id: "BS_DrvNum",
    name: "BS_DrvNum",
    offset: 36,
    size: 1,
    info: (
      <>
        <p>
          Int 0x13 drive number (e.g. 0x80). This field supports MS-DOS
          bootstrap and is set to the INT 0x13 drive number of the media (0x00
          for floppy disks, 0x80 for hard disks).
        </p>
        <Alert>
          <AlertTriangleIcon className="h-6 w-6" />
          <AlertTitle>Note:</AlertTitle>
          <AlertDescription>
            This field is actually operating system specific.
          </AlertDescription>
        </Alert>
      </>
    ),
  },
  bs_reserved1: {
    id: "BS_Reserved1",
    name: "BS_Reserved1",
    offset: 37,
    size: 1,
    info: (
      <p>
        Reserved (used by Windows NT). Code that formats FAT volumes should
        always set this byte to 0.
      </p>
    ),
  },
  bs_bootsig: {
    id: "BS_BootSig",
    name: "BS_BootSig",
    offset: 38,
    size: 1,
    info: (
      <p>
        Extended boot signature (0x29). This is a signature byte that indicates
        that the following three fields in the boot sector are present.
      </p>
    ),
  },
  bs_volid: {
    id: "BS_VolID",
    name: "BS_VolID",
    offset: 39,
    size: 4,
    info: (
      <p>
        Volume serial number. This field, together with BS_VolLab, supports
        volume tracking on removable media. These values allow FAT file system
        drivers to detect that the wrong disk is inserted in a removable drive.
        This ID is usually generated by simply combining the current date and
        time into a 32-bit value.
      </p>
    ),
  },
  bs_vollab: {
    id: "BS_VolLab",
    name: "BS_VolLab",
    offset: 43,
    size: 11,
    info: (
      <p>
        Volume label. This field matches the 11-byte volume label recorded in
        the root directory. NOTE: FAT file system drivers should make sure that
        they update this field when the volume label file in the root directory
        has its name changed or created. The setting for this field when there
        is no volume label is the string “NO NAME ”.
      </p>
    ),
  },
  bs_filsystype: {
    id: "BS_FilSysType",
    name: "BS_FilSysType",
    offset: 54,
    size: 8,
    info: (
      <>
        <p>One of the strings “FAT12 ”, “FAT16 ”, or “FAT ”.</p>
        <Alert>
          <AlertTriangleIcon className="h-6 w-6" />
          <AlertTitle>Note:</AlertTitle>
          <AlertDescription>
            Many people think that the string in this field has something to do
            with the determination of what type of FAT— FAT12, FAT16, or
            FAT32—that the volume has. This is not true. You will note from its
            name that this field is not actually part of the BPB. This string is
            informational only and is not used by Microsoft file system drivers
            to determine FAT typ,e because it is frequently not set correctly or
            is not present. See the FAT Type Determination section of this
            document. This string should be set based on the FAT type though,
            because some non-Microsoft FAT file system drivers do look at it.
          </AlertDescription>
        </Alert>
      </>
    ),
  },
};
