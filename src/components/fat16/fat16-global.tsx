import { component$, $, type QwikMouseEvent } from "@builder.io/qwik";
import styles from "./fat16-global.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export const Fat16 = component$(() => {
  const nav = useNavigate();
  const blockClick = $(
    (_: QwikMouseEvent<HTMLElement, MouseEvent>, el: HTMLElement) => {
      nav(`/fat16/${el.dataset.id}`);
    }
  );

  return (
    <svg
      class={styles["full-screen"]}
      viewBox="0 0 649 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fat16-all">
        <g
          id="data-g"
          data-id="data-area"
          class={styles["clickable-group"]}
          onClick$={blockClick}
        >
          <rect
            x="438.5"
            y="0.5"
            width="210"
            height="44"
            fill="white"
            stroke="black"
          />
          <text
            id="data"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Inter"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="468.447" y="26.8636">
              Data (files and directories)
            </tspan>
          </text>
        </g>
        <g
          id="root-directory-g"
          data-id="root-directory"
          class={styles["clickable-group"]}
          onClick$={blockClick}
        >
          <rect
            x="321.5"
            y="0.5"
            width="117"
            height="44"
            fill="white"
            stroke="black"
          />
          <text
            id="root directory"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Inter"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="339.061" y="26.8636">
              Root Directory
            </tspan>
          </text>
        </g>
        <g
          id="fat-2-g"
          data-id="fat-2"
          class={styles["clickable-group"]}
          onClick$={blockClick}
        >
          <rect
            x="230.5"
            y="0.5"
            width="91"
            height="44"
            fill="white"
            stroke="black"
          />
          <text
            id="fat 2"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Inter"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="260.309" y="26.8636">
              FAT 2
            </tspan>
          </text>
        </g>
        <g
          id="fat-1-g"
          data-id="fat-1"
          class={styles["clickable-group"]}
          onClick$={blockClick}
        >
          <rect
            x="142.5"
            y="0.5"
            width="89"
            height="44"
            fill="white"
            stroke="black"
          />
          <text
            id="fat 1"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Inter"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="172.152" y="26.8636">
              FAT 1
            </tspan>
          </text>
        </g>
        <g
          id="reserved-area-g"
          data-id="reserved-area"
          class={styles["clickable-group"]}
          onClick$={blockClick}
        >
          <rect
            x="0.5"
            y="0.5"
            width="142"
            height="44"
            fill="white"
            stroke="black"
          />
          <text
            id="reserved area"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Inter"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="30.0566" y="26.8636">
              Reserved Area
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
});
