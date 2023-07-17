import { component$, $, type QwikMouseEvent } from "@builder.io/qwik";
import styles from "./ext2-block-group.module.css";
import ext2styles from "../ext2-global.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export const Ext2BlockGroup = component$(() => {
  const nav = useNavigate();
  const blockClick = $(
    (_: QwikMouseEvent<HTMLElement, MouseEvent>, el: HTMLElement) => {
      nav(`/ext2/${el.dataset.id}`);
    }
  );

  return (
    <svg
      viewBox="0 0 646 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={styles["blockgroup"]}
    >
      <g id="ext2-all">
        <g id="ext2-block-layout">
          <g
            id="data-blocks-g"
            data-id="data-blocks"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="439.5"
              y="0.5"
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
              <tspan x="508.902" y="26.8636">
                Data Blocks
              </tspan>
            </text>
          </g>
          <g
            id="inode-table-g"
            data-id="inode-table"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="326.5"
              y="0.5"
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
              <tspan x="349.988" y="26.8636">
                Inode Table
              </tspan>
            </text>
          </g>
          <g
            id="inode-bitmap-g"
            data-id="inode-bitmap"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="259.5"
              y="0.5"
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
              <tspan x="275.416" y="19.3636">
                Inode &#10;
              </tspan>
              <tspan x="273.242" y="34.3636">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-bitmap-g"
            data-id="block-bitmap"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="192.5"
              y="0.5"
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
              <tspan x="208.791" y="19.3636">
                Block &#10;
              </tspan>
              <tspan x="206.242" y="34.3636">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-group-g"
            data-id="block-group-descriptor"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="85.5"
              y="0.5"
              width="107"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group descriptor"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="102.789" y="19.3636">
                Block Group &#10;
              </tspan>
              <tspan x="109.439" y="34.3636">
                Descriptor
              </tspan>
            </text>
          </g>
          <g
            id="super-block-g"
            data-id="superblock"
            class={ext2styles["clickable-group"]}
            onClick$={blockClick}
          >
            <rect
              x="0.5"
              y="0.5"
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
              <tspan x="9.09766" y="26.8636">
                Super Block
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
});
