"use client";
import { groupDescriptorData } from "@/domain/ext-2";
import { TableWithDescription } from "../../components/table-with-description";

export default function BlockGroupDescriptor() {
  return <TableWithDescription data={groupDescriptorData} />;
}
