import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import {
  superblockData,
  superblockExtendedData,
} from "~/routes/ext2/superblock/superblockData";
import { TableWithDescription } from "~/components/UI/table/tableWithDescription";

export default component$(() => {
  return (
    <section class={styles["sec"]}>
      <p>
        The superblock contains <b>all the information</b> about the
        configuration of the filesystem. The information in the superblock
        contains fields such as the total number of inodes and blocks in the
        filesystem and how many are free, how many inodes and blocks are in each
        block group, when the filesystem was mounted (and if it was cleanly
        unmounted), when it was modified, what version of the filesystem it is
        and which OS created it.
      </p>
      <p>
        The primary copy of the superblock is stored at an offset of{" "}
        <b>1024 bytes</b> from the start of the device, and it is essential to
        mounting the filesystem. Since it is so important, backup copies of the
        superblock are stored in block groups throughout the filesystem.
      </p>
      <p>
        The first version of ext2 (revision 0) stores a copy at the start of
        every block group, along with backups of the group descriptor block(s).
        Because this can consume a considerable amount of space for large
        filesystems, later revisions can optionally reduce the number of backup
        copies by only putting backups in specific groups (this is the sparse
        superblock feature). The groups chosen are 0, 1 and powers of 3, 5 and 7
      </p>
      <p>
        Revision 1 and higher of the filesystem also store extra fields, such as
        a volume name, a unique identification number, the inode size, and space
        for optional filesystem features to store configuration info.
      </p>
      <p>
        All fields in the superblock (as in all other ext2 structures) are
        stored on the disc in{" "}
        <a href="https://en.wikipedia.org/wiki/Endianness">little endian</a>{" "}
        format, so a filesystem is portable between machines without having to
        know what machine it was created on.
      </p>

      <TableWithDescription data={superblockData} />
      <TableWithDescription data={superblockExtendedData} />
    </section>
  );
});

export const head: DocumentHead = {
  title: "Superblock | File Systems",
};
