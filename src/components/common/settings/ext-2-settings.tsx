import { EXT2BlockGroup } from "@/app/ext-2/(ext-2-parts)/components/graphic/ext-2-block-group";
import {
  GlobalState,
  changeSelectedFSComponent,
  selectEXT2BlockGroupColors,
  selectFSComponent,
  setEXT2BlockGroupComponentColor,
} from "@/app/store/global-slice";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useStoreSelector } from "@/store/store-hooks";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

export function EXT2Settings() {
  const dispatch = useDispatch();

  const selectedComponent = useStoreSelector(selectFSComponent);

  const clickHandle = (id: string) => {
    dispatch(changeSelectedFSComponent(id));
  };

  const groupHandlers = useMemo(
    () => ({
      "super-block": clickHandle,
      "block-group-descriptor": clickHandle,
      "block-bitmap": clickHandle,
      "inode-bitmap": clickHandle,
      "inode-table": clickHandle,
      "data-blocks": clickHandle,
    }),
    []
  );

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectFSComponent) return;
    dispatch(
      setEXT2BlockGroupComponentColor({
        id: selectedComponent as keyof GlobalState["settings"]["ext-2"],
        color: e.target.value,
      })
    );
  };

  const EXT2BlockGroupComponentColors = useStoreSelector(
    selectEXT2BlockGroupColors
  );

  return (
    <>
      <DialogHeader className="mb-4">
        <DialogTitle>Second Extended File System (EXT2) Settings</DialogTitle>
      </DialogHeader>
      <EXT2BlockGroup
        selectedComponent={selectedComponent}
        onGroupClickHandlers={groupHandlers}
        dynamicStyles={selectedComponent !== ""}
        colors={EXT2BlockGroupComponentColors}
      />
      <div className="flex mt-4">
        <ul className="rounded-md bg-gray-300 p-2 w-4/6">
          {Object.entries(EXT2BlockGroupComponentColors).map((entry) => {
            const { "0": key, "1": val } = entry;
            return (
              <li
                key={key}
                className="hover:bg-gray-200 p-0.5 px-2 rounded-md cursor-pointer"
                onClick={() => clickHandle(key)}
              >
                {key} ({val})
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col p-4 w-2/6 items-center">
          {selectedComponent && (
            <>
              <Label htmlFor="color-picker">Color picker</Label>
              <input
                type="color"
                id="color-picker"
                name="color-picker"
                value={
                  EXT2BlockGroupComponentColors !== undefined
                    ? (EXT2BlockGroupComponentColors as any)[selectedComponent]
                    : "#ffffff"
                }
                onChange={onColorChange}
                className="appearance-none w-full h-full rounded-md"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
