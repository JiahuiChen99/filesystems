import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiChevronRightMini, HiHomeOutline } from "@qwikest/icons/heroicons";

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <a href="/">
        <HiHomeOutline />
      </a>
      {loc.url.pathname.split("/").map((path, index, subpaths) => {
        const p = subpaths.reduce((prevSubPath, subpath, currentIndex) => {
          if (currentIndex > index) return prevSubPath;
          return prevSubPath + "/" + subpath;
        });

        return path === "" ? null : (
          <>
            <HiChevronRightMini />
            <a href={`${p}`}>{path}</a>
          </>
        );
      })}
    </>
  );
});
