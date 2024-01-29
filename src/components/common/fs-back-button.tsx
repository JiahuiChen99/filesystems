"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export function BackButton() {
  const [title, setTitle] = React.useState<string>("");
  const router = useRouter();

  const onBackClick = () => {
    router.push(`${window.location.origin}/ext2`);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    setTitle(document.title);
  }, []);

  return (
    <div
      id="back-btn"
      className="flex items-center mb-2 cursor-pointer w-fit hover:bg-slate-50 rounded-md p-2 pr-4"
      onClick={onBackClick}>
      <ChevronLeft className="mr-2 h-6 w-6" />
      <h1 className="font-black text-2xl">{title}</h1>
    </div>
  );
}
