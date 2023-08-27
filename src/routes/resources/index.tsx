import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section>
      <h1>More on this topic</h1>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/File_system">
            File systems (Wikipedia)
          </a>
        </li>
        <li>
          <a href="https://www.kernel.org/doc/ols/2007/ols2007v2-pages-21-34.pdf">
            The new ext4 filesystem: current status and future plans
          </a>
        </li>
        <li>
          <a href="https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf">
            The Google File System
          </a>
        </li>
        <li>
          <a href="https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system">
            Colossus under the hood: a peek into Google’s scalable storage
            system
          </a>
        </li>
      </ul>
    </section>
  );
});

export const head: DocumentHead = {
  title: "File Systems",
};
