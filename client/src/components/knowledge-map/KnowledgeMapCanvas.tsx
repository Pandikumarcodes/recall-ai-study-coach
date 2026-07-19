import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Edge,
  type Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { KnowledgeNode } from "./KnowledgeNode";
const nodes: Node[] = [
  {
    id: "main",
    type: "knowledge",
    position: { x: 330, y: 0 },
    data: { label: "Electric Fields", kind: "main" },
  },
  {
    id: "a",
    type: "knowledge",
    position: { x: 80, y: 120 },
    data: { label: "Field Strength", kind: "concept" },
  },
  {
    id: "b",
    type: "knowledge",
    position: { x: 330, y: 120 },
    data: { label: "Potential", kind: "concept" },
  },
  {
    id: "c",
    type: "knowledge",
    position: { x: 580, y: 120 },
    data: { label: "Applications", kind: "review" },
  },
  {
    id: "d",
    type: "knowledge",
    position: { x: 0, y: 250 },
    data: { label: "Definition", kind: "definition" },
  },
  {
    id: "e",
    type: "knowledge",
    position: { x: 150, y: 250 },
    data: { label: "Example", kind: "example" },
  },
  {
    id: "f",
    type: "knowledge",
    position: { x: 270, y: 250 },
    data: { label: "Formula", kind: "definition" },
  },
  {
    id: "g",
    type: "knowledge",
    position: { x: 430, y: 250 },
    data: { label: "Real-world example", kind: "example" },
  },
  {
    id: "h",
    type: "knowledge",
    position: { x: 580, y: 250 },
    data: { label: "Common mistakes", kind: "review" },
  },
];
const edges: Edge[] = [
  { id: "ma", source: "main", target: "a" },
  { id: "mb", source: "main", target: "b" },
  { id: "mc", source: "main", target: "c" },
  { id: "ad", source: "a", target: "d" },
  { id: "ae", source: "a", target: "e" },
  { id: "bf", source: "b", target: "f" },
  { id: "bg", source: "b", target: "g" },
  { id: "ch", source: "c", target: "h" },
];
interface Props {
  onSelect: (node: {
    title: string;
    description: string;
    importance: string;
  }) => void;
}
export function KnowledgeMapCanvas({ onSelect }: Props) {
  const [flowNodes] = useState(nodes);
  const onNodeClick = useCallback(
    (_: unknown, node: Node) =>
      onSelect({
        title: String(node.data.label),
        description: `${node.data.label} is a key concept in the electric fields study material.`,
        importance: node.data.kind === "review" ? "Review required" : "High",
      }),
    [onSelect],
  );
  return (
    <div className="h-[32rem] overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <ReactFlow
        edges={edges}
        fitView
        nodes={flowNodes}
        nodeTypes={{ knowledge: KnowledgeNode }}
        onNodeClick={onNodeClick}
      >
        <Background color="var(--color-border)" gap={18} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
