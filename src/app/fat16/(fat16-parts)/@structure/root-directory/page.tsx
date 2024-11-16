import { TableGraphic } from "@/components/common/table-graphic";
import { Metadata } from "next";
import { fat16RootDirData } from "../../../../../domain/fat-16/fat16-root-directory";
import { FAT16RootDir } from "../../components/graphic/fat16-root-dir";

export const metadata: Metadata = {
  title: "Root Directory",
};

export default function RootDirectory() {
  return <TableGraphic data={fat16RootDirData} graphic={<FAT16RootDir />} />;
}
