"use client";
import { useToast } from "@/components/ui/use-toast";
import { EXT2 as EXT2Graphic } from "./(ext2-parts)/components/graphic/ext2";
import { useEffect } from "react";

export default function EXT2() {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      description: "Click on a selectable item to see its details.",
    });
  }, []);

  return (
    <section className="flex p-10 w-full h-full justify-center align-middle">
      <EXT2Graphic />
    </section>
  );
}
