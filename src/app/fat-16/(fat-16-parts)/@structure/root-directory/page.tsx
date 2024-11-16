import { TableGraphic } from "@/components/common/table-graphic";
import { fat16RootDirData } from "@/domain/fat-16/fat-16-root-directory";
import { Metadata } from "next";
import { FAT16RootDir } from "../../components/graphic/fat-16-root-dir";

export const metadata: Metadata = {
  title: "Root Directory",
};

export default function RootDirectory() {
  return <TableGraphic data={fat16RootDirData} graphic={<FAT16RootDir />} />;
}
