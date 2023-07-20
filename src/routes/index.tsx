import {
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import Lottie from "lottie-web";
import storageAnime from "~/assets/storageAnime.json";

export default component$(() => {
  const canvas = useSignal<Element>();

  useVisibleTask$(() => {
    noSerialize(
      Lottie.loadAnimation({
        container: canvas.value as Element,
        animationData: storageAnime,
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: "storage animation",
      })
    );
  });

  return (
    <>
      <section id="herobanner" class={styles["herobanner"]}>
        <div class={styles["herobanner__left"]}>
          <h1>File Systems</h1>
          <ul class={styles["fslist"]}>
            <li>
              <Link href="/ext2">The second Extended File Systems (EXT2)</Link>
            </li>
            <li>
              <Link href="/fat16">Fat Allocation Table 16 (FAT16)</Link>
            </li>
          </ul>
        </div>
        <div ref={canvas} class={styles["animation"]} />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "File Systems",
  meta: [
    {
      name: "description",
      content:
        "Docs for the file systems projects of Advanced Operating Systems",
    },
  ],
};
