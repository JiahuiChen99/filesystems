"use client";
import { selectSelectedProp } from "@/app/fat-16/store/fat-16-slice";
import { FAT16 } from "@/app/fat-16/types/fat-16";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fat16RootDirData } from "@/domain/fat-16/fat-16-root-directory";
import { useStoreSelector } from "@/store/store-hooks";
import { ArrowRightFromLine, Cpu } from "lucide-react";

export default function RootDiretory() {
  const selectedProp = useStoreSelector(selectSelectedProp);
  const { name, offset, size, info } =
    fat16RootDirData[selectedProp as keyof FAT16.Struct] || {};
  return (
    <>
      <section id="root-dir-formulas" className="border p-4 rounded-lg">
        <h3 className="font-bold">DIR Δoffset</h3>
        <div>fat16_directory struct size</div>
        <h3 className="font-bold">FirstRootDirSecNum </h3>
        <div>BPB_ResvdSecCnt + (BPB_NumFATs * BPB_FATSz16) </div>
        <p>The dot entry is a directory that points to itself.</p>
        <p>
          The dotdot entry points to the starting cluster of the parent of this
          directory (which is 0 if this directories parent is the root
          directory).
        </p>
      </section>
      <section className="w-full rounded-lg border p-4 h-fit">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger>Directory & Root directory</AccordionTrigger>
            <AccordionContent className="space-y-2.5 text-base">
              <p>
                This is the most simple explanation of FAT directory entries.
                This document totally ignores the Long File Name architecture
                and only talks about short directory entries. For a more
                complete description of FAT directory structure, see the
                document “FAT: Long Name On-Media Format Specification”.
              </p>
              <p>
                A FAT directory is nothing but a “file” composed of a linear
                list of 32-byte structures. The only special directory, which
                must always be present, is the root directory. For FAT12 and
                FAT16 media, the root directory is located in a fixed location
                on the disk immediately following the last FAT and is of a fixed
                size in sectors computed from the BPB_RootEntCnt value (see
                computations for RootDirSectors earlier in this document). For
                FAT12 and FAT16 media, the first sector of the root directory is
                sector number relative to the first sector of the FAT volume:
              </p>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                FirstRootDirSecNum = BPB_ResvdSecCnt + (BPB_NumFATs *
                BPB_FATSz16)
              </div>
              <p>
                Unlike other directories, the root directory itself on any FAT
                type does not have any date or time stamps, does not have a file
                name (other than the implied file name “\”), and does not
                contain “.” and ..” files as the first two directory entries in
                the directory. The only other special aspect of the root
                directory is that it is the only directory on the FAT volume for
                which it is valid to have a file that has only the
                ATTR_VOLUME_ID attribute bit set.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <div className="flex flex-col space-y-1"></div>
      {selectedProp && (
        <section className="border p-4 rounded-lg space-y-3">
          <h2 className="font-bold text-lg">{name}</h2>
          <div className="flex flex-col space-y-1">
            <div className="flex gap-x-4">
              <ArrowRightFromLine />
              <span>
                Offset: <b>{offset}</b> bytes
              </span>
            </div>
            <div className="flex gap-x-4">
              <Cpu />
              <span>
                Size: <b>{size}</b> bytes
              </span>
            </div>
          </div>
          <div>{info}</div>
        </section>
      )}
    </>
  );
}
