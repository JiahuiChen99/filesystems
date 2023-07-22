import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiChevronRightMini, HiHomeOutline } from "@qwikest/icons/heroicons";
import styles from "./breadcrumb.module.css";

export default component$(() => {
  const loc = useLocation();
  return (
    <nav aria-label="breadcrumb" class={styles["breadcrumb"]}>
      <ol>
        <li class={styles["breadcrumb-list-item"]}>
          <a href="/">
            <HiHomeOutline />
          </a>
        </li>
        {loc.url.pathname.split("/").map((path, index, subpaths) => {
          const p = subpaths.reduce((prevSubPath, subpath, currentIndex) => {
            if (currentIndex > index) return prevSubPath;
            return prevSubPath + "/" + subpath;
          });

          return path === "" ? null : (
            <li class={styles["breadcrumb-list-item"]}>
              <HiChevronRightMini />
              <a href={`${p}`}>{path}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
});
