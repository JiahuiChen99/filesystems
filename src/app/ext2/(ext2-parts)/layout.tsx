import React from "react";
import { EXT2BlockGroup } from "./components/ext2-block-group";
import { BackButton } from "@/components/common/fs-back-button";

export default function FileSystemLayout({
  children,
  description,
  extended,
}: {
  children: React.ReactNode;
  description: React.ReactNode;
  extended: React.ReactNode;
}) {
  return (
    <section id="filesystem information" className="h-full p-10">
      <div className="px-32 pb-10">
        <EXT2BlockGroup />
      </div>
      <div className="flex flex-row w-full relative">
        <div className="sticky top-2 max-w-lg h-fit mr-2">
          <BackButton />
          <section className="border p-4 rounded-lg">{description}</section>
        </div>
        <div className="flex flex-col flex-grow gap-2 ">{extended}</div>
      </div>
    </section>
  );
}
