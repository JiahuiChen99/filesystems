import type { ReactNode } from "react";

export namespace EXT2 {
  export interface ConstValueDesc {
    id: string;
    name: string;
    value: number | string;
    description: string;
  }

  export interface Struct {
    id: string;
    offset: number;
    size: number | string;
    description: string;
    info?: ReactNode;
  }
}
