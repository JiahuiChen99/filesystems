"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useEffect } from "react";
import { EXT2 as EXT2Graphic } from "./(ext2-parts)/components/graphic/ext2";

export default function EXT2() {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      description: "Click on a selectable item to see its details.",
    });
  }, []);

  return (
    <section className="flex flex-col p-10 w-full h-full justify-center align-middle">
      <EXT2Graphic />
      <Button variant="default" size="default" asChild>
        <Link href="/canvas/ext-2">View in canvas</Link>
      </Button>
    </section>
  );
}
