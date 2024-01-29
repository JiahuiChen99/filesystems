"use client";
import { TableWithDescription } from "../../components/table-with-description";
import { groupDescriptorData } from "./data/ext2-group-descriptor";

export default function BlockGroupDescriptor() {
  return <TableWithDescription data={groupDescriptorData} />;
}
