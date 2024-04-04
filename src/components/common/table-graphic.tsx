"use client";
import * as React from "react";
import { FATFSTable } from "@/app/fat16/components/fat-fs-table";
import { useDispatch } from "react-redux";
import { FAT16 } from "@/app/fat16/types/fat16";
import { changeSelection } from "@/app/fat16/store/fat16-slice";
import { useTableGraphicSwitch } from "./table-graphic-switch";

export function TableGraphic({
  data,
  graphic,
}: {
  data: { [key: string]: FAT16.Struct };
  graphic: JSX.Element;
}) {
  const dispatch = useDispatch();
  const { viewSwitch, TableGraphicSwitch } = useTableGraphicSwitch();

  const onRowClick = (propID: string) => {
    dispatch(changeSelection(propID));
  };

  const TableOrGraphic = React.useCallback(() => {
    if (viewSwitch) return graphic;
    return <FATFSTable data={data} onRowClickCallback={onRowClick} />;
  }, [viewSwitch]);

  return (
    <div className="px-24">
      <div className="flex place-content-center mb-4">
        <TableGraphicSwitch />
      </div>
      <TableOrGraphic />
    </div>
  );
}
