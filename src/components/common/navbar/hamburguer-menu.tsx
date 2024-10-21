"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { NavbarItem } from "./nav-bar";

const MenuItemComponent = ({
  item,
  depth = 0,
  setSheetOpen, // FIXME: remove prop drilling
}: {
  item: NavbarItem;
  depth?: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => {
            if (subItem.isMobileEnabled !== false) {
              return (
                <MenuItemComponent
                  key={subItem.title}
                  item={subItem}
                  depth={depth + 1}
                  setSheetOpen={setSheetOpen}
                />
              );
            }
          })}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={item.href || "/"}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
      onClick={() => setSheetOpen(false)}
    >
      {item.title}
    </Link>
  );
};

export function HamburguerMenu({
  navbarItems,
}: {
  navbarItems: Array<NavbarItem>;
}) {
  const [open, setSheetOpen] = React.useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col pt-14 w-[240px] sm:w-[300px] h-full justify-between"
      >
        <nav className="flex flex-col space-y-4">
          {navbarItems.map((item) => {
            if (item.isMobileEnabled !== false) {
              return (
                <MenuItemComponent
                  key={item.title}
                  item={item}
                  setSheetOpen={setSheetOpen}
                />
              );
            }
          })}
        </nav>
        <Link
          href="https://jiahuichen.dev"
          className="flex items-center bg-gray-100 p-1 rounded-sm"
        >
          <Avatar>
            <AvatarImage src="https://res.cloudinary.com/jiahuichen/jiahuichen.dev/profilepic.webp" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col pl-2">
            <span className="font-bold">Jiahui Chen</span>
            <span className="text-sm text-gray-600">About the author</span>
          </div>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
