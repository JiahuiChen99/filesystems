import { QRL } from "@builder.io/qwik";

export namespace EXT2 {
  interface ConstValueDesc {
    name: string;
    value: number;
    description: string;
  }

  interface Struct {
    id: string;
    offset: number;
    size: number | string;
    description: string;
    info?: QRL<() => JSX.Element>;
  }
}
