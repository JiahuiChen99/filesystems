import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
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
