import { BackButton } from "@/components/common/fs-back-button";
import React from "react";
import { FAT16 as FAT16Graphic } from "./components/graphic/fat-16";

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
      <div className="flex w-full relative">
        <div className="sticky top-2 w-1/2 h-fit mr-2">
          <BackButton backToPath="/fat-16" />
          <section>{structure}</section>
        </div>
        <section className="flex flex-col flex-grow gap-2 w-1/2">
          {extended}
        </section>
      </div>
    </section>
  );
}
