import { Metadata } from "next";
import { FAT16RootDir } from "../../components/graphic/fat16-root-dir";
import { fat16RootDirData } from "../../@extended/root-directory/data/fat16-root-directory";
import { TableGraphic } from "@/components/common/table-graphic";

export const metadata: Metadata = {
  title: "Root Directory",
};

export default function RootDirectory() {
  return <TableGraphic data={fat16RootDirData} graphic={<FAT16RootDir />} />;
}
