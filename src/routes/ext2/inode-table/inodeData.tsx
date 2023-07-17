import { $ } from "@builder.io/qwik";
import { EXT2Table } from "~/components/UI/table/table";
import { EXT2 } from "~/typings/ext2";
import { imodeData } from "./data/imodeData";

export const inodeData: EXT2.Struct[] = [
  {
    id: "i_mode",
    offset: 0,
    size: 2,
    description: "i_mode",
    info: $(() => (
      <>
        <p>
          16bit value used to indicate the format of the described file and the
          access rights. Here are the possible values, which can be combined in
          various ways:
        </p>
        <EXT2Table data={imodeData} />
      </>
    )),
  },
  {
    id: "i_uid",
    offset: 2,
    size: 2,
    description: "i_uid",
    info: $(() => <></>),
  },
  {
    id: "i_size",
    offset: 4,
    size: 4,
    description: "i_size",
    info: $(() => <></>),
  },
  {
    id: "i_atime",
    offset: 8,
    size: 4,
    description: "i_atime",
    info: $(() => <></>),
  },
  {
    id: "i_ctime",
    offset: 12,
    size: 4,
    description: "i_ctime",
    info: $(() => <></>),
  },
  {
    id: "i_mtime",
    offset: 16,
    size: 4,
    description: "i_mtime",
    info: $(() => <></>),
  },
  {
    id: "i_dtime",
    offset: 20,
    size: 4,
    description: "i_dtime",
    info: $(() => <></>),
  },
  {
    id: "i_gid",
    offset: 24,
    size: 2,
    description: "i_gid",
    info: $(() => <></>),
  },
  {
    id: "i_links_count",
    offset: 26,
    size: 2,
    description: "i_links_count",
    info: $(() => <></>),
  },
  {
    id: "i_blocks",
    offset: 28,
    size: 4,
    description: "i_blocks",
    info: $(() => <></>),
  },
  {
    id: "i_flags",
    offset: 32,
    size: 4,
    description: "i_flags",
    info: $(() => <></>),
  },
  {
    id: "i_osd1",
    offset: 36,
    size: 4,
    description: "i_osd1",
    info: $(() => <></>),
  },
  {
    id: "x",
    offset: 40,
    size: "15 * 4",
    description: "i_block",
    info: $(() => <></>),
  },
  {
    id: "i_generation",
    offset: 100,
    size: 4,
    description: "i_generation",
    info: $(() => <></>),
  },
  {
    id: "i_file_acl",
    offset: 104,
    size: 4,
    description: "i_file_acl",
    info: $(() => <></>),
  },
  {
    id: "i_dir_acl",
    offset: 108,
    size: 4,
    description: "i_dir_acl",
    info: $(() => <></>),
  },
  {
    id: "i_faddr",
    offset: 112,
    size: 4,
    description: "i_faddr",
    info: $(() => <></>),
  },
  {
    id: "i_osd2",
    offset: 116,
    size: 12,
    description: "i_osd2",
    info: $(() => <></>),
  },
];
