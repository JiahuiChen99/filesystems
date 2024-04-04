import { Image, TableIcon } from "lucide-react";
import clsx from "clsx";
import { Switch } from "@/components/ui/switch";
import * as React from "react";

export function useTableGraphicSwitch() {
  const [viewSwitch, setViewSwitch] = React.useState<boolean>(false);

  return {
    viewSwitch,
    setViewSwitch,
    TableGraphicSwitch: () => (
      <TableGraphicSwitch
        viewSwitch={viewSwitch}
        onSwitchChangeCallback={() => setViewSwitch((prev) => !prev)}
      />
    ),
  };
}

function TableGraphicSwitch({
  viewSwitch,
  onSwitchChangeCallback,
}: {
  viewSwitch: boolean;
  onSwitchChangeCallback: (checked: boolean) => void;
}) {
  return (
    <div className="flex space-x-2.5">
      <div className={clsx("flex", viewSwitch && "text-gray-300")}>
        <TableIcon />
        <span>Table</span>
      </div>
      <span>|</span>
      <span className={clsx("flex", !viewSwitch && "text-gray-300")}>
        <Image />
        Graphic
      </span>
      <Switch checked={viewSwitch} onCheckedChange={onSwitchChangeCallback} />
    </div>
  );
}
