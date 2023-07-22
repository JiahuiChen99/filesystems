import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import { Ext2BlockGroup } from "~/components/ext2/block-group/ext2-block-group";
import styles from "./ext2.css?inline";
import {
  BlockGroupRegionContext,
  type BlockGroupRegionContextType,
} from "./context/ext2Context";
import Breadcrumb from "~/components/UI/breadcrumb/Breadcrumb";

export default component$(() => {
  useStyles$(styles);

  const blockGroupRegionInfo = useStore<BlockGroupRegionContextType>({
    blockGroupRegionTitle: "",
  });

  useContextProvider(BlockGroupRegionContext, blockGroupRegionInfo);

  return (
    <>
      <div class="navigation">
        <Ext2BlockGroup />
        <Breadcrumb />
      </div>
      <h1>{blockGroupRegionInfo.blockGroupRegionTitle}</h1>
      <Slot />
    </>
  );
});
