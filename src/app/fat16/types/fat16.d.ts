import type { ReactNode } from "react";

export namespace FAT16 {
  export interface Struct {
    id: string;
    name: string;
    offset: number;
    size: number | string;
    info?: ReactNode;
  }
}
