"use client";
import { CanvasBitmapNode } from "@/components/canvas/canvas-bitmap-node";
import { CanvasTableNode } from "@/components/canvas/canvas-table-node";
import { FSCanvas } from "@/components/canvas/fs-canvas";
import { Button } from "@/components/ui/button";
import {
  Background,
  BackgroundVariant,
  MarkerType,
  ReactFlowProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";
import { fsNodesConfig } from "./canvas/[fs_id]/canvas-node-config/fs-canvas-nodes-config";
import { FSListItem } from "./home/components/fs-list-item";
import { FSList } from "./home/data/fs-list-data";

const nodeTypes = {
  "canvas-table": CanvasTableNode,
  "canvas-bitmap": CanvasBitmapNode,
};

const DEFAULT_FS = "ext-2";
const { nodes: _nodes, edges: _edges } = fsNodesConfig[DEFAULT_FS];

const homePageFSCanvasConfig: ReactFlowProps = {
  nodes: _nodes,
  edges: _edges,
  nodeTypes,
  proOptions: { hideAttribution: true },
  edgesReconnectable: false,
  defaultEdgeOptions: {
    zIndex: 1,
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  nodesDraggable: false,
  panOnScroll: true,
  selectionOnDrag: true,
  defaultViewport: {
    x: 0,
    y: 0,
    zoom: 0,
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col md:flex-row w-full h-full px-10 py-20 justify-between space-x-2">
      <div className="flex flex-col place-items-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-black">
            The interactive docs for File Systems
          </h1>
          <p className="text-gray-500">
            An engaging and interactive experience to understand file systems,
            the engine that powers the storage of your data.
          </p>
        </div>
        <ul className="my-10 space-y-2.5">
          {FSList.map((item) => (
            <FSListItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col-reverse w-full md:flex-col">
        <div className="border rounded-md max-w-full h-96 max-h-full md:h-full">
          <FSCanvas props={homePageFSCanvasConfig}>
            <Background
              variant={"dots" as BackgroundVariant}
              gap={12}
              size={1}
            />
          </FSCanvas>
        </div>
        <div className="flex space-x-2 place-content-end mb-2 md:mt-2">
          <Button
            variant="outline"
            onClick={() => router.push("/canvas/ext-2")}
          >
            View it in Canvas
          </Button>
          <Button variant="outline" onClick={() => router.push("/ext2")}>
            Go to docs
          </Button>
        </div>
      </div>
    </main>
  );
}
