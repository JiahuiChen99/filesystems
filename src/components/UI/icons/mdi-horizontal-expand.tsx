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
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M9 11h6V8l4 4l-4 4v-3H9v3l-4-4l4-4v3m-7 9V4h2v16H2m18 0V4h2v16h-2Z"
      ></path>
    </svg>
  );
}

export default MdiHorizontalExpand;
