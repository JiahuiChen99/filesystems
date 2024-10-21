"use client";
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  SelectionMode,
  useNodesState,
} from "@xyflow/react";

import { CanvasBitmapNode } from "@/components/canvas/canvas-bitmap-node";
import { CanvasTableNode } from "@/components/canvas/canvas-table-node";
import "@xyflow/react/dist/style.css";
import { notFound } from "next/navigation";
import { fsNodesConfig } from "./canvas-node-config/fs-canvas-nodes-config";

const nodeTypes = {
  "canvas-table": CanvasTableNode,
  "canvas-bitmap": CanvasBitmapNode,
};

export default function CanvasPage({ params }: { params: { fs_id: string } }) {
  const { nodes, edges } =
    fsNodesConfig[params.fs_id as keyof typeof fsNodesConfig];
  const [currentNodes, _, onNodesChange] = useNodesState(nodes);

  if (!fsNodesConfig[params.fs_id as keyof typeof fsNodesConfig]) {
    return notFound();
  }

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={currentNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        proOptions={{
          hideAttribution: true,
        }}
        panOnScroll
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        defaultViewport={{
          x: 450,
          y: 300,
          zoom: 0.4,
        }}
      >
        <Controls />
        <MiniMap />
        <Background variant={"dots" as BackgroundVariant} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
