import { $, component$, useSignal } from "@builder.io/qwik";
import { EXT2Table } from "~/components/UI/table/table";
import { HiXMarkSolid } from "@qwikest/icons/heroicons";
import MdiHorizontalExpand from "../icons/mdi-horizontal-expand";
import styles from "./tableWithDescription.module.css";
import MdiMemory from "../icons/mdi-memory";
import { EXT2 } from "~/typings/ext2";

export const TableWithDescription = component$(
  ({ data }: { data: EXT2.Struct[] }) => {
    const isDescriptionOpen = useSignal<boolean>(true);
    const selectedSuperblockProp = useSignal<EXT2.Struct>(data[0]);

    const openPropertyDescription$ = $((selectedPropIndex: number) => {
      selectedSuperblockProp.value = data[selectedPropIndex];
      if (!isDescriptionOpen.value) isDescriptionOpen.value = true;
    });

    return (
      <div class={styles["table-with-property-description"]}>
        <EXT2Table data={data} clickCallback$={openPropertyDescription$} />
        {isDescriptionOpen.value && (
          <div class={styles["property-description-section"]}>
            <HiXMarkSolid
              class="close"
              onClick$={() =>
                (isDescriptionOpen.value = !isDescriptionOpen.value)
              }
            />
            <h2>{selectedSuperblockProp.value.description}</h2>
            <div class={styles["metadata"]}>
              <div>
                <MdiHorizontalExpand />
                <span>
                  Offset: <b>{selectedSuperblockProp.value.offset}</b> bytes
                </span>
              </div>
              <div>
                <MdiMemory />
                <span>
                  Size: <b>{selectedSuperblockProp.value.size}</b> bytes
                </span>
              </div>
            </div>
            {selectedSuperblockProp.value.info &&
              selectedSuperblockProp.value.info()}
          </div>
        )}
      </div>
    );
  }
);
