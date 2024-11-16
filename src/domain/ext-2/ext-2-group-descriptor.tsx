import type { EXT2 } from "@/app/ext-2/types/ext-2";
import { CanvasDTO } from "@/dto/canvas";

export const groupDescriptorData: EXT2.Struct[] = [
  {
    id: "bg_block_bitmap",
    offset: 0,
    size: 4,
    description: "bg_block_bitmap",
    info: (
      <>
        <p>
          32bit block id of the first block of the &quot;
          <a href="block-bitmap">block bitmap</a>&quot; for the group
          represented.
        </p>
        <p>
          The actual block bitmap is located within its own allocated blocks
          starting at the block ID specified by this value.
        </p>
      </>
    ),
  },
  {
    id: "bg_inode_bitmap",
    offset: 4,
    size: 4,
    description: "bg_inode_bitmap",
    info: (
      <p>
        32bit block id of the first block of the &quot;
        <a href="#inode-bitamp">inode bitmap</a>&quot; for the group
        represented.
      </p>
    ),
  },
  {
    id: "bg_inode_table",
    offset: 8,
    size: 4,
    description: "bg_inode_table",
    info: (
      <p>
        32bit block id of the first block of the &quot;
        <a href="inode-table">inode table</a>&quot; for the group represented.
      </p>
    ),
  },
  {
    id: "bg_free_blocks_count",
    offset: 12,
    size: 2,
    description: "bg_free_blocks_count",
    info: (
      <p>
        16bit value indicating the total number of free blocks for the
        represented group.
      </p>
    ),
  },
  {
    id: "bg_free_inodes_count",
    offset: 14,
    size: 2,
    description: "bg_free_inodes_count",
    info: (
      <p>
        16bit value indicating the total number of free inodes for the
        represented group.
      </p>
    ),
  },
  {
    id: "bg_used_dirs_count",
    offset: 16,
    size: 2,
    description: "bg_used_dirs_count",
    info: (
      <p>
        16bit value indicating the number of inodes allocated to directories for
        the represented group.
      </p>
    ),
  },
  {
    id: "bg_pad",
    offset: 18,
    size: 2,
    description: "bg_pad",
    info: (
      <p>16bit value used for padding the structure on a 32bit boundary.</p>
    ),
  },
  {
    id: "bg_reserved",
    offset: 20,
    size: 12,
    description: "bg_reserved",
    info: <p>12 bytes of reserved space for future revisions.</p>,
  },
];

const decodeDataToNodeData = (
  data: EXT2.Struct
): CanvasDTO.Data<CanvasDTO.SizeAndOffset> => {
  const { id, offset, size } = data;
  return {
    id,
    name: id,
    metadata: {
      group: "block-group-descriptor",
    },
    offset,
    offsetUnits: "byte",
    size,
    units: "byte",
  };
};

export const groupDescriptorDataCanvas: Array<
  CanvasDTO.Data<CanvasDTO.SizeAndOffset>
> = [...groupDescriptorData.map(decodeDataToNodeData)];
