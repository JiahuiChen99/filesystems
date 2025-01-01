"use client";
import { GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

import { changeSelectedFSComponent } from "@/app/store/global-slice";
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
import { useDispatch } from "react-redux";

const data = {
  navMain: [
    {
      title: "Second Extendend Filesystem",
      url: "ext-2",
      items: [
        {
          id: "block-group",
          title: "Block group",
          url: "#",
        },
        {
          id: "super-block",
          title: "Superblock",
          url: "/ext-2/super-block",
        },
        {
          id: "block-group-descriptor",
          title: "Block group descriptor",
          url: "/ext-2/block-group-descriptor",
        },
        {
          id: "block-bitmap",
          title: "Block bitmap",
          url: "/ext-2/block-bitmap",
        },
        {
          id: "inode-bitmap",
          title: "Inode bitmap",
          url: "/ext-2/inode-bitmap",
        },
        {
          id: "inode-table",
          title: "Inode table",
          url: "/ext-2/inode-table",
        },
        {
          id: "data-blocks",
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
          id: "reserved-area",
          title: "Reserved area",
          url: "/fat-16/reserved-area",
        },
        {
          id: "fat",
          title: "FAT 1",
          url: "/fat-16/fat",
        },
        {
          id: "fat",
          title: "FAT 2",
          url: "/fat-16/fat",
        },
        {
          id: "root-directory",
          title: "Root directory",
          url: "/fat-16/root-directory",
        },
        {
          id: "data",
          title: "Data (files and directories)",
          url: "/fat-16/data",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const dispath = useDispatch();
  const fsItemClickHandler = (id: string) => {
    dispath(changeSelectedFSComponent(id));
  };

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
                        <SidebarMenuSubButton
                          asChild
                          isActive={false}
                          onClick={() => fsItemClickHandler(item.id)}
                        >
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
