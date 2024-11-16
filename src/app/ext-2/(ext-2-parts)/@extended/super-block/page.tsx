"use client";

import { superblockData, superblockExtendedData } from "@/domain/ext-2";
import { TableWithDescription } from "../../components/table-with-description";

export default function SuperBlock() {
  return (
    <>
      <TableWithDescription data={superblockData} />
      <TableWithDescription data={superblockExtendedData} />
    </>
  );
}
