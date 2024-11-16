import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { LucideIcon, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

interface TabProps {
  name: string;
  icon: LucideIcon;
}

const SETTINGS_TABS: Array<TabProps> = [
  {
    name: "General",
    icon: Settings,
  },
  {
    name: "EXT2",
    icon: Settings,
  },
  {
    name: "FAT16",
    icon: Settings,
  },
];

export const SettingsNav = () => {
  const router = useRouter();
  return (
    <SidebarProvider className="h-full">
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="none"
        className="relative rounded-l-lg max-h-full"
      >
        <SidebarHeader className="font-bold">Settings</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {SETTINGS_TABS.map((tab) => (
                  <SidebarMenuItem key={tab.name}>
                    <SidebarMenuButton asChild>
                      <div onClick={() => router.push(`?tab=${tab.name}`)}>
                        <tab.icon />
                        <span>{tab.name}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
