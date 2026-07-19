import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap, type Edge, type Node, type ReactFlowInstance } from "reactflow";
import "reactflow/dist/style.css";
import { knowledgeMap } from "../../mocks/knowledgeMap";
import { KnowledgeNode } from "./KnowledgeNode";

interface Props { onSelect: (node: { title: string; description: string; importance: string }) => void; }

export function KnowledgeMapCanvas({ onSelect }: Props) {
  const { nodes, edges } = useMemo(() => {
    const rootId = "root";
    const generatedNodes: Node[] = [{ id: rootId, type: "knowledge", position: { x: 360, y: 0 }, data: { label: knowledgeMap.root, kind: "main" } }];
    const generatedEdges: Edge[] = [];
    knowledgeMap.branches.forEach((branch, branchIndex) => {
      const branchId = `branch-${branchIndex}`;
      generatedNodes.push({ id: branchId, type: "knowledge", position: { x: branchIndex * 230, y: 130 }, data: { label: branch.title, kind: "concept" } });
      generatedEdges.push({ id: `${rootId}-${branchId}`, source: rootId, target: branchId });
      branch.children.forEach((child, childIndex) => {
        const childId = `${branchId}-child-${childIndex}`;
        generatedNodes.push({ id: childId, type: "knowledge", position: { x: branchIndex * 230 + childIndex * 105, y: 260 }, data: { label: child, kind: childIndex === 0 ? "definition" : "example" } });
        generatedEdges.push({ id: `${branchId}-${childId}`, source: branchId, target: childId });
      });
    });
    return { nodes: generatedNodes, edges: generatedEdges };
  }, []);
  const [flowInstance, setFlowInstance] = useState<ReactFlowInstance | null>(null);
  const onNodeClick = useCallback((_: unknown, node: Node) => onSelect({ title: String(node.data.label), description: `${node.data.label} is a key concept in ${knowledgeMap.root}.`, importance: node.data.kind === "example" ? "Review required" : "High" }), [onSelect]);
  useEffect(() => { if (!flowInstance) return; const fitGraph = () => flowInstance.fitView({ padding: 0.2, duration: 200, maxZoom: 1 }); const frame = window.requestAnimationFrame(fitGraph); window.addEventListener("resize", fitGraph); return () => { window.cancelAnimationFrame(frame); window.removeEventListener("resize", fitGraph); }; }, [flowInstance]);
  return <div className="h-[24rem] min-w-0 w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-card sm:h-[32rem]"><ReactFlow className="h-full w-full" edges={edges} fitView fitViewOptions={{ padding: 0.2, maxZoom: 1 }} nodes={nodes} nodeTypes={{ knowledge: KnowledgeNode }} onNodeClick={onNodeClick} onInit={setFlowInstance}><Background color="var(--color-border)" gap={18} /><Controls /><MiniMap /></ReactFlow></div>;
}
