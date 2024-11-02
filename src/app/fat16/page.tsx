"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React from "react";
import { FAT16 as FAT16Graphic } from "./(fat16-parts)/components/graphic/fat16";

export default function FAT16() {
  const { toast } = useToast();

  React.useEffect(() => {
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
      <Button variant="default" size="default" asChild>
        <Link href="/canvas/fat-16">View in canvas</Link>
      </Button>
    </section>
  );
}
