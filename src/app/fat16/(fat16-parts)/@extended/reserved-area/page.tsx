"use client";
import { FAT16 } from "@/app/fat16/types/fat16";
import { useStoreSelector } from "@/store/store-hooks";
import { selectSelectedProp } from "@/app/fat16/store/fat16-slice";
import { ArrowRightFromLine, Cpu } from "lucide-react";
import { fat16RootDirData } from "./data/fat16-reserved-area";

export default function ReservedArea() {
  const selectedProp = useStoreSelector(selectSelectedProp);
  const { name, offset, size, info } =
    fat16RootDirData[selectedProp as keyof FAT16.Struct] || {};
  return (
    <>
      <section id="root-dir-formulas" className="border p-4 rounded-lg">
        <p>
          BPB (BIOS Parameter Block), sometimes called “boot sector”, “reserved
          sector” or “0th sector” is the first important data structure on a FAT
          Volume
        </p>
        <h3 className="font-bold">BPB Size</h3>
        <div>BPB_RsvdSecCnt * BPB_BytsPerSec</div>
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
