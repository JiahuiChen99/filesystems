"use client";
import { TableWithDescription } from "../../components/table-with-description";
import {
  superblockData,
  superblockExtendedData,
} from "./data/ext2-super-block";

export default function SuperBlock() {
  return (
    <>
      <TableWithDescription data={superblockData} />
      <TableWithDescription data={superblockExtendedData} />
    </>
  );
}
