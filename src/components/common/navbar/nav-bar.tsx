"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NavbarSettings } from "./nav-bar-settings";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export function Navbar() {
  return (
    <div className="flex flex-row w-full max-w-full border-b border-gray-300 p-2">
      <a href="/" className="mx-10 flex items-center space-x-2.5">
        <Image
          src="/favicon.svg"
          alt="File systems icon"
          width={30}
          height={30}
        />
        <span className="text-xl font-bold">File Systems</span>
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://jiahuichen.dev">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        About the author
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Jiahui Chen
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/ext2" title="Second Extended Filesystem">
                  Linux kernel filesystem.
                </ListItem>
                <ListItem href="/fat16" title="File Allocation Table 16">
                  Default filesystem for MS-DOS and Windows 9x (&apos;95,
                  &apos;98, Me).
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/glossary">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Glossary
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavbarSettings />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
