import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function MdiHorizontalExpand(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
      key={key}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.5 7h-9M5 4.5L2.5 7L5 9.5m4-5L11.5 7L9 9.5M.5.5v13m13-13v13"
      ></path>
    </svg>
  );
}

export default MdiHorizontalExpand;
