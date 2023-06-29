import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Ext2 } from "~/components/ext2/ext2-global";
import { HiXMarkSolid } from "@qwikest/icons/heroicons";
import styles from "./index.module.css";

export default component$(() => {
  const viewAPIWarn = useSignal<boolean>(true);

  const viewAPIWarnClose = $(() => {
    viewAPIWarn.value = false;
  });

  return (
    <>
      <h1>File Systems: The second Extended File System</h1>
      <div class={styles['container']}>
        <Ext2 />
      </div>
      {viewAPIWarn.value && (
        <div class={styles["view-api-warn"]}>
          <HiXMarkSolid
            onClick$={viewAPIWarnClose}
            class={styles["view-api-warn-close"]}
          />
          <p>
            This site supports View Transition, an experimental feature. For a
            smoother experience use one of the following browsers [Chrome 111+,
            Edge 111+, Opera 97+], and enable <i>viewTransition API</i> &
            <i>viewTransition for navigations</i> flags at <a href="/">Flags</a>
            .
          </p>
        </div>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: 'File Systems',
  meta: [
    {
      name: 'description',
      content: 'Docs for the file systems projects of Advanced Operating Systems',
    },
  ],
};
