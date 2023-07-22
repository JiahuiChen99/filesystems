import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Ext2BlockGroup } from "~/components/ext2/block-group/ext2-block-group";
import styles from "./ext2.module.css";
import {
  BlockGroupRegionContext,
  type BlockGroupRegionContextType,
} from "./context/ext2Context";
import Breadcrumb from "~/components/UI/breadcrumb/Breadcrumb";

export default component$(() => {
  const blockGroupRegionInfo = useStore<BlockGroupRegionContextType>({
    blockGroupRegionTitle: "",
  });

  useContextProvider(BlockGroupRegionContext, blockGroupRegionInfo);

  return (
    <>
      <div class={styles["navigation"]}>
        <Ext2BlockGroup />
        <Breadcrumb />
      </div>
      <h1 class={styles["layout-title"]}>
        {blockGroupRegionInfo.blockGroupRegionTitle}
      </h1>
      <Slot />
    </>
  );
});
