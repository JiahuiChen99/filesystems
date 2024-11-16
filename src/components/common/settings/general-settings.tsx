"use client";
import {
  selectTableGraphic,
  toggleTableGraphic,
} from "@/app/store/global-slice";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useStoreSelector } from "@/store/store-hooks";
import { useDispatch } from "react-redux";

export function GeneralSettings() {
  const dispatch = useDispatch();
  const graphicTableSwitch = useStoreSelector(selectTableGraphic);

  return (
    <>
      <DialogHeader>
        <DialogTitle>General Settings</DialogTitle>
      </DialogHeader>
      <div>Default type of information to show in all pages</div>
      <RadioGroup
        defaultValue={graphicTableSwitch ? "graphic" : "table"}
        onValueChange={() => dispatch(toggleTableGraphic())}
      >
        <div className="flex flex-row items-center space-x-2">
          <RadioGroupItem value="graphic" id="graphic" />
          <Label htmlFor="graphic">Graphic</Label>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <RadioGroupItem value="table" id="table" />
          <Label htmlFor="table">Table</Label>
        </div>
      </RadioGroup>
    </>
  );
}
