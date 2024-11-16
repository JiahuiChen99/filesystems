"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Button } from "../../ui/button";
import { EXT2Settings } from "../settings/ext2-settings";
import { FAT16Settings } from "../settings/fat16-settings";
import { GeneralSettings } from "../settings/general-settings";
import { SettingsNav } from "../settings/settings-nav";

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
    return tab ? true : false;
  }, [tab]);

  return (
    <NavigationMenuItem className="flex !ml-auto">
      <Dialog defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button variant="ghost" className={navigationMenuTriggerStyle()}>
            Settings
          </Button>
        </DialogTrigger>
        <DialogContent className="flex w-full h-3/5 p-0 gap-0">
          <SettingsNav />
          <div className="p-3 w-full">{settingsComponent}</div>
        </DialogContent>
      </Dialog>
    </NavigationMenuItem>
  );
}
