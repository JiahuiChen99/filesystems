"use client";
import { CanvasBitmapNode } from "@/components/canvas/canvas-bitmap-node";
import { CanvasTableNode } from "@/components/canvas/canvas-table-node";
import { FSCanvas } from "@/components/canvas/fs-canvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FS_NAMES } from "@/domain/consts";
import {
  Background,
  BackgroundVariant,
  MarkerType,
  ReactFlowProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";
import React from "react";
import { fsNodesConfig } from "./canvas/[fs_id]/canvas-node-config/fs-canvas-nodes-config";
import { FSListItem } from "./home/components/fs-list-item";
import { FSList } from "./home/data/fs-list-data";

const nodeTypes = {
  "canvas-table": CanvasTableNode,
  "canvas-bitmap": CanvasBitmapNode,
};

const DEFAULT_FS: FSKeys = "ext-2";
const homePageFSCanvasConfig: ReactFlowProps = {
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
  minZoom: 0,
  maxZoom: 0.5,
};

type FSKeys = keyof typeof fsNodesConfig;
const allFSKeys: Array<FSKeys> = Object.keys(fsNodesConfig) as Array<FSKeys>;
const SWITCH_FS_TIME = 10_000;
let initFSId = 0;

export default function Home() {
  const router = useRouter();
  const [currentFSKey, setCurrentFSKey] = React.useState<FSKeys>(DEFAULT_FS);
  const { nodes: _nodes, edges: _edges } = fsNodesConfig[currentFSKey];

  const switchFS = () => {
    initFSId++;
    if (initFSId === allFSKeys.length) {
      initFSId = 0;
    }
    setCurrentFSKey(allFSKeys[initFSId]);
  };

  React.useEffect(() => {
    const timerId = setInterval(switchFS, SWITCH_FS_TIME);
    return () => clearInterval(timerId);
  }, []);

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
        <Badge className="w-fit mb-2" variant="default">
          {FS_NAMES[currentFSKey]}
        </Badge>
        <div className="border rounded-md max-w-full h-96 max-h-full md:h-full">
          <FSCanvas
            props={{ ...homePageFSCanvasConfig, nodes: _nodes, edges: _edges }}
          >
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
            onClick={() => router.push(`/canvas/${currentFSKey}`)}
          >
            View it in Canvas
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push(`/${currentFSKey}`)}
          >
            Go to docs
          </Button>
        </div>
      </div>
    </main>
  );
}
