import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiChevronRightMini, HiHomeOutline } from "@qwikest/icons/heroicons";
import styles from "./breadcrumb.module.css?inline";

export default component$(() => {
  useStyles$(styles);
  const loc = useLocation();
  return (
    <nav aria-label="breadcrumb">
      <ol>
        <li>
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
            <li>
              <HiChevronRightMini />
              <a href={`${p}`}>{path}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
});
