"use client";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SettingsNav } from "../settings/settings-nav";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { EXT2Settings } from "../settings/ext2-settings";
import { FAT16Settings } from "../settings/fat16-settings";
import { GeneralSettings } from "../settings/general-settings";

const SETTINGS_COMPONENT: { [index: string]: JSX.Element } = {
  General: <GeneralSettings />,
  EXT2: <EXT2Settings />,
  FAT16: <FAT16Settings />,
};

export function NavbarSettings() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.replace(`${pathname}?tab=General`);
    } else {
      router.replace(pathname);
    }
  };

  const settingsComponent = useMemo(() => {
    return !tab ? <GeneralSettings /> : SETTINGS_COMPONENT[tab];
  }, [tab]);

  const defaultOpen = useMemo(() => {
    if (tab) return true;
    return false;
  }, [tab]);

  return (
    <NavigationMenuItem>
      <Dialog defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button variant="ghost" className={navigationMenuTriggerStyle()}>
            Settings
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-4xl h-4/6 border-0">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <SettingsNav />
            <div className="flex flex-col w-full p-10">{settingsComponent}</div>
          </div>
        </DialogContent>
      </Dialog>
    </NavigationMenuItem>
  );
}
