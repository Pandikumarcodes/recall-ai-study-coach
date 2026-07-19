import { Handle, Position } from "reactflow";
interface Props {
  data: { label: string; kind: string };
}
const nodeTone: Record<string, string> = {
  main: "border-primary bg-primary text-text-inverse",
  concept: "border-primary/30 bg-surface text-text-primary",
  definition: "border-success/30 bg-success/10 text-success",
  example: "border-warning/30 bg-warning/10 text-warning",
  review: "border-danger/30 bg-danger/10 text-danger",
};
export function KnowledgeNode({ data }: Props) {
  return (
    <div
      className={`min-w-32 rounded-xl border px-4 py-3 text-center text-sm font-bold shadow-card ${nodeTone[data.kind] ?? nodeTone.concept}`}
    >
      <Handle position={Position.Top} type="target" />
      <span>{data.label}</span>
      <Handle position={Position.Bottom} type="source" />
    </div>
  );
}
