import {
  ReactFlow,
  ReactFlowProps,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ReactElement } from "react";

function Flow(props: ReactFlowProps) {
  const { fitView } = useReactFlow();

  return (
    <ReactFlow {...props} onInit={() => fitView()} className="h-full w-full" />
  );
}

export function FSCanvas({
  children,
  props,
}: {
  children: ReactElement;
  props: ReactFlowProps;
}) {
  return (
    <ReactFlowProvider>
      <Flow {...props}>{children}</Flow>
    </ReactFlowProvider>
  );
}
