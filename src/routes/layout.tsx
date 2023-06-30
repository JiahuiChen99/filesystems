import { component$, $, Slot, useSignal, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { HiXMarkSolid } from "@qwikest/icons/heroicons";
import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  useStyles$(styles);
  const viewAPIWarn = useSignal<boolean>(true);

  const viewAPIWarnClose = $(() => {
    viewAPIWarn.value = false;
  });

  return (
    <>
      <main>
        <Slot />
        {viewAPIWarn.value && (
          <div class="view-api-warn">
            <HiXMarkSolid
              onClick$={viewAPIWarnClose}
              class="view-api-warn-close"
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
      </main>
    </>
  );
});
