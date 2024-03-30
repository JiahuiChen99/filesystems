"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

export function BackButton({ backToPath = "/" }: { backToPath: string }) {
  const [title, setTitle] = React.useState<string>("");
  const router = useRouter();

  const onBackClick = () => {
    router.push(`${window.location.origin}${backToPath}`);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    setTitle(document.title);
  }, []);

  if (title === "")
    return <Skeleton className="mb-2 w-full h-[48px] rounded-md" />;

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
