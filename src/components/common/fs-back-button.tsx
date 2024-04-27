"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const routesToTitle: { [index: string]: string } = {
  "super-block": "Super block",
  "block-group-descriptor": "Block Group Descriptor",
  "block-bitmap": "Block Bitmap",
  "inode-bitmap": "Inode Bitmap",
  "inode-table": "Inode Table",
  "data-blocks": "Data Blocks",
  "reserved-area": "Reserved Area",
  fat: "FAT",
  "root-directory": "Root directory",
  data: "Data (Files and directories)",
};

export function BackButton({
  backToPath = "/",
}: Readonly<{ backToPath: string }>) {
  const pathname = usePathname();
  const router = useRouter();

  const onBackClick = () => {
    router.push(`${window.location.origin}${backToPath}`);
  };

  const title: keyof typeof routesToTitle = React.useMemo(() => {
    return pathname.split("/")[2];
  }, [pathname]);

  return (
    <div
      id="back-btn"
      className="flex items-center mb-2 cursor-pointer w-fit hover:bg-slate-50 rounded-md p-2 pr-4"
      onClick={onBackClick}>
      <ChevronLeft className="mr-2 h-6 w-6" />
      <h1 className="font-black text-2xl">{routesToTitle[title] ?? "Hello"}</h1>
    </div>
  );
}
