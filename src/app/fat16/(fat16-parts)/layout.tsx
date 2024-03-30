import React from "react";
import { FAT16 as FAT16Graphic } from "./components/graphic/fat16";
import { BackButton } from "@/components/common/fs-back-button";

export default function FAT16FileSystemLayout({
  children,
  structure,
  extended,
}: {
  children: React.ReactNode;
  structure: React.ReactNode;
  extended: React.ReactNode;
}) {
  return (
    <section id="filesystem information" className="h-full p-10">
      <div className="px-32 pb-10">
        <FAT16Graphic />
      </div>
      <div className="flex flex-col w-full relative">
        <div className="sticky top-2 max-w-lg h-fit mr-2">
          <BackButton backToPath="/fat16" />
        </div>
        <div className="flex w-full h-full space-x-4">
          <section className="w-1/2 border p-4 rounded-lg space-y-2">
            {structure}
          </section>
          <section className="flex flex-col flex-grow gap-2 w-1/2">
            {extended}
          </section>
        </div>
      </div>
    </section>
  );
}
