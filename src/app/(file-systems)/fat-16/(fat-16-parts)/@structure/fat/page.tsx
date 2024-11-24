import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAT 1 & 2",
};

export default function FAT() {
  return (
    <section id="root-dir-formulas" className="border p-4 rounded-lg">
      <h3 className="font-bold">Total FATs Size</h3>
      <div>BPB_NumFATs * BPB_FATSz16 * BPB_BytsPerSec</div>
      <h3 className="font-bold">Single FAT Size</h3>
      <div>BPB_FATSz16 * BPB_BytsPerSec</div>
    </section>
  );
}
