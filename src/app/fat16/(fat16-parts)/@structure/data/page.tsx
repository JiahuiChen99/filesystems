import { Metadata } from "next";
import { FAT16DataRegion } from "../../components/graphic/fat16-data";

export const metadata: Metadata = {
  title: "Data (files and directories)",
};

export default function Data() {
  return (
    <div className="px-24 w-full h-[350px]">
      <FAT16DataRegion />
    </div>
  );
}
