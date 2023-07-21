import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";
import { HiChevronDownMini } from "@qwikest/icons/heroicons";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <nav class={styles["nav"]} aria-label="Primary navigation">
      <img
        src="/favicon.svg"
        alt="File systems icon"
        width={30}
        height={30}
        onClick$={() => nav("/")}
      />
      <ul class={styles["ul"]}>
        <li>
          <a href="/file-systems">Information</a>
        </li>
        <li class={styles["has-menu"]}>
          <button type="button">
            <div class={styles["menu-label"]}>
              <span>File systems</span>
              <HiChevronDownMini />
            </div>
            <ul class={styles["menu-content"]} aria-label="Submenu">
              <li>
                <a href="/ext2">EXT2</a>
              </li>
              <li>
                <a href="/fat16">FAT16</a>
              </li>
            </ul>
          </button>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
      </ul>
    </nav>
  );
});
