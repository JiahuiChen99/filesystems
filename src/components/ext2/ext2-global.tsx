import { component$, $, useSignal } from "@builder.io/qwik";
import styles from "./ext2-global.module.css";

export const Ext2 = component$(() => {
  const blockGroupVisible = useSignal<boolean>(false);



  const blockClick = $((_, el) => {
    console.log(el.id);
  });

  const blockGroupClick = $(() => {
    blockGroupVisible.value = !blockGroupVisible.value;
  });

  return (
    <svg
      class={styles["full-screen"]}
      viewBox="0 0 646 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ext2-all">
        <g
          id="ext2-block-layout"
          class={
            blockGroupVisible.value
              ? styles["superblock"]
              : styles["block-group-layout-invisible"]
          }
        >
          <g
            id="data-blocks-g"
            data-id="data-blocks"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="439.5"
              y="104.5"
              width="206"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="data blocks"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="508.902" y="130.864">
                Data Blocks
              </tspan>
            </text>
          </g>
          <g
            id="inode-table-g"
            data-id="inode-table"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="326.5"
              y="104.5"
              width="113"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="inode table"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="349.988" y="130.864">
                Inode Table
              </tspan>
            </text>
          </g>
          <g
            id="inode-bitmap-g"
            data-id="inode-bitmap"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="259.5"
              y="104.5"
              width="67"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="inode bitmap"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="275.416" y="123.364">
                Inode &#10;
              </tspan>
              <tspan x="273.242" y="138.364">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-bitmap-g"
            data-id="block-bitmap"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="192.5"
              y="104.5"
              width="67"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block bitmap"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="208.791" y="123.364">
                Block &#10;
              </tspan>
              <tspan x="206.242" y="138.364">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-group-g"
            data-id="block-group-descriptor"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="85.5"
              y="104.5"
              width="107"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group descriptorr"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="102.789" y="123.364">
                Block Group &#10;
              </tspan>
              <tspan x="109.439" y="138.364">
                Descriptor
              </tspan>
            </text>
          </g>
          <g
            id="super-block-g"
            data-id="superblock"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="0.5"
              y="104.5"
              width="85"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="super block"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="9.09766" y="130.864">
                Super Block
              </tspan>
            </text>
          </g>
          <line
            id="line-2"
            x1="199.144"
            y1="44.4787"
            x2="0.144346"
            y2="104.479"
            stroke="black"
            stroke-dasharray="2 2"
          />
          <line
            id="line-1"
            x1="316.09"
            y1="44.5081"
            x2="645.09"
            y2="104.508"
            stroke="black"
            stroke-dasharray="2 2"
          />
        </g>
        <g id="ext2-global-layout">
          <g
            id="block-group-n-g"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="528.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group n"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="546.271" y="26.8636">
                Block Group N
              </tspan>
            </text>
          </g>
          <g id="...-g" class={styles["clickable-group"]} onClick$={blockClick}>
            <rect
              x="433.5"
              y="0.5"
              width="95"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="..."
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="476.043" y="26.8636">
                ...
              </tspan>
            </text>
          </g>
          <g
            id="block-group-2-g"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="316.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group 2"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="335.156" y="26.8636">
                Block Group 2
              </tspan>
            </text>
          </g>
          <g
            id="block-group-1-g"
            class={styles["clickable-group"]}
            onClick$={blockGroupClick}
          >
            <rect
              x="199.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group 1"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="219" y="26.8636">
                Block Group 1
              </tspan>
            </text>
          </g>
          <g
            id="block-group-0-g"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="82.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group 0"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="101.039" y="26.8636">
                Block Group 0
              </tspan>
            </text>
          </g>
          <g
            id="boot-sector-g"
            class={styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="0.5"
              y="0.5"
              width="82"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="boot sector"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="7.94336" y="26.8636">
                Boot Sector
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
});
