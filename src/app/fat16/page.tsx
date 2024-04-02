"use client";
import { useToast } from "@/components/ui/use-toast";
import { FAT16 as FAT16Graphic } from "./(fat16-parts)/components/graphic/fat16";
import { useEffect } from "react";

export default function FAT16() {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      description: "Click on a selectable item to see its details.",
    });
  }, []);

  return (
    <section className="flex flex-col p-10 w-full h-full justify-center align-middle">
      <FAT16Graphic />
      <section id="fat-fs-description">
        <p>
          A FAT file system volume is composed of four basic regions, which are
          laid out in this order on the volume:
        </p>
        <p>
          The above figure illustrates the four regions in a volume formatted
          FAT:
        </p>
      </section>
    </section>
  );
}
