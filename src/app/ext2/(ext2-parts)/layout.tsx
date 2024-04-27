"use client";
import React from "react";
import { EXT2BlockGroup } from "./components/graphic/ext2-block-group";
import { BackButton } from "@/components/common/fs-back-button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  changeSelectedFSComponent,
  selectEXT2BlockGroupColors,
  selectFSComponent,
} from "@/app/store/global-slice";
import { useStoreSelector } from "@/store/store-hooks";

export default function FileSystemLayout({
  children,
  description,
  extended,
}: Readonly<{
  children: React.ReactNode;
  description: React.ReactNode;
  extended: React.ReactNode;
}>) {
  const router = useRouter();
  const dispatch = useDispatch();

  const clickHandle = (id: string) => {
    dispatch(changeSelectedFSComponent(id));
    router.push(id);
  };

  const groupHandlers = {
    "super-block": clickHandle,
    "block-group-descriptor": clickHandle,
    "block-bitmap": clickHandle,
    "inode-bitmap": clickHandle,
    "inode-table": clickHandle,
    "data-blocks": clickHandle,
  };

  const selected = useStoreSelector(selectFSComponent);
  const EXT2BlockGroupComponentColors = useStoreSelector(
    selectEXT2BlockGroupColors
  );

  return (
    <section id="filesystem information" className="h-full p-10">
      <div className="px-32 pb-10">
        <EXT2BlockGroup
          onGroupClickHandlers={groupHandlers}
          dynamicStyles={true}
          selectedComponent={selected}
          colors={EXT2BlockGroupComponentColors}
        />
      </div>
      <div className="flex flex-row w-full relative">
        <div className="sticky top-2 max-w-lg h-fit mr-2">
          <BackButton backToPath="/ext2" />
          <section className="border p-4 rounded-lg space-y-2">
            {description}
          </section>
        </div>
        <section className="flex flex-col flex-grow gap-2">{extended}</section>
      </div>
    </section>
  );
}
