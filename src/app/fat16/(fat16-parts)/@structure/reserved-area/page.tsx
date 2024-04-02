import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import { FAT16ReservedArea } from "../../components/graphic/fat16-reserved-area";

export const metadata: Metadata = {
  title: "Reserved Area",
};

export default function ReservedArea() {
  return (
    <>
      <section className="w-full rounded-lg border p-4 h-fit">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger>Boot Sector and BPB</AccordionTrigger>
            <AccordionContent className="space-y-2.5 text-base">
              <p>
                The first important data structure on a FAT volume is called the
                BPB (BIOS Parameter Block), which is located in the first sector
                of the volume in the Reserved Region. This sector is sometimes
                called the “boot sector” or the “reserved sector” or the “0th
                sector,” but the important fact is simply that it is the first
                sector of the volume.
              </p>
              <p>
                This is the first thing about the FAT file system that sometimes
                causes confusion. In MS-DOS version 1.x, there was not a BPB in
                the boot sector. In this first version of the FAT file system,
                there were only two different formats, the one for single-sided
                and the one for double-sided 360K 5.25-inch floppy disks. The
                determination of which type was on the disk was done by looking
                at the first byte of the FAT (the low 8 bits of FAT[0]).
              </p>
              <p>
                This type of media determination was superseded in MS-DOS
                version 2.x by putting a BPB in the boot sector, and the old
                style of media determination (done by looking at the first byte
                of the FAT) was no longer supported. All FAT volumes must have a
                BPB in the boot sector.
              </p>
              <p>
                This brings us to the second point of confusion relating to FAT
                volume determination: What exactly does a BPB look like? The BPB
                in the boot sector defined for MS-DOS 2.x only allowed for a FAT
                volume with strictly less than 65,536 sectors (32 MB worth of
                512-byte sectors). This limitation was due to the fact that the
                “total sectors” field was only a 16-bit field. This limitation
                was addressed by MS-DOS 3.x, where the BPB was modified to
                include a new 32-bit field for the total sectors value.
              </p>
              <p>
                The next BPB change occurred with the Microsoft Windows 95
                operating system, where the FAT32 type was introduced. FAT16 was
                limited by the maximum size of the FAT and the maximum valid
                cluster size to no more than a 2 GB volume if the disk had
                512-byte sectors. FAT32 addressed this limitation on the amount
                of disk space that one FAT volume could occupy so that disks
                larger than 2 GB only had to have one partition defined.
              </p>
              <p>
                The FAT32 BPB exactly matches the FAT12/FAT16 BPB up to and
                including the BPB_TotSec32 field. They differ starting at offset
                36, depending on whether the media type is FAT12/FAT16 or FAT32
                (see discussion below for determining FAT type). The relevant
                point here is that the BPB in the boot sector of a FAT volume
                should always be one that has all of the new BPB fields for
                either the FAT12/FAT16 or FAT32 BPB type. Doing it this way
                ensures the maximum compatibility of the FAT volume and ensures
                that all FAT file system drivers will understand and support the
                volume properly, because it always contains all of the currently
                defined fields.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <div className="px-24 w-full h-[700px]">
        <FAT16ReservedArea />
      </div>
    </>
  );
}
