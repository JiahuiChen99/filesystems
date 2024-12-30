import { GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Second Extendend Filesystem",
      url: "ext-2",
      items: [
        {
          title: "Block group",
          url: "#",
        },
        {
          title: "Superblock",
          url: "/ext-2/super-block",
        },
        {
          title: "Block group descriptor",
          url: "/ext-2/block-group-descriptor",
        },
        {
          title: "Block bitmap",
          url: "/ext-2/block-bitmap",
        },
        {
          title: "Inode bitmap",
          url: "/ext-2/inode-bitmap",
        },
        {
          title: "Inode table",
          url: "/ext-2/inode-table",
        },
        {
          title: "Data blocks",
          url: "#",
        },
      ],
    },
    {
      title: "File Allocation Table (16-bits)",
      url: "/fat-16",
      items: [
        {
          title: "Reserved area",
          url: "/fat-16/reserved-area",
        },
        {
          title: "FAT 1",
          url: "/fat-16/fat",
        },
        {
          title: "FAT 2",
          url: "/fat-16/fat",
        },
        {
          title: "Root directory",
          url: "/fat-16/root-directory",
        },
        {
          title: "Data (files and directories)",
          url: "/fat-16/data",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">
                    File systems documentation
                  </span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={false}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
