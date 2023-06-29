import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Ext2 } from '~/components/ext2/ext2-global';
import styles from './index.module.css'

export default component$(() => {
  return (
    <>
      <h1>File Systems: The second Extended File System</h1>
      <div class={styles['container']}>
        <Ext2 />
      </div>
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
