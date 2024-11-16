"use client";
import { FATFSTable } from "@/app/fat-16/components/fat-fs-table";
import { changeSelection } from "@/app/fat-16/store/fat16-slice";
import { FAT16 } from "@/app/fat-16/types/fat16";
import * as React from "react";
import { useDispatch } from "react-redux";
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
