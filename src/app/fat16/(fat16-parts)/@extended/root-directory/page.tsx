"use client";
import { fat16RootDirData } from "./data/fat16-root-directory";
import { FAT16 } from "@/app/fat16/types/fat16";
import { useStoreSelector } from "@/store/store-hooks";
import { selectSelectedProp } from "@/app/fat16/store/fat16-slice";
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
