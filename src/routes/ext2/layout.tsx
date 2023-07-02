import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { HiChevronRightMini, HiHomeOutline } from "@qwikest/icons/heroicons";
import { useLocation } from "@builder.io/qwik-city";
import { Ext2BlockGroup } from "~/components/ext2/block-group/ext2-block-group";
import styles from "./ext2.css?inline";

export default component$(() => {
  useStyles$(styles);
  const loc = useLocation();

  return (
    <>
      <div class="navigation">
        <Ext2BlockGroup />
        <div class="block-group-navigation">
          <a href="/">
            <HiHomeOutline />
          </a>
          {loc.url.pathname.split("/").map((path) => {
            return path === "" ? null : <Link path={path} />;
          })}
        </div>
      </div>
      <h1>Superblock</h1>
      <Slot />
    </>
  );
});

const Link = component$(({ path }: { path: string }) => {
  return (
    <>
      <HiChevronRightMini />
      <a href={`/${path}`}>{path}</a>
    </>
  );
});
