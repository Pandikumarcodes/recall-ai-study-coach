import { Eye, FileText, RotateCcw, Trash2 } from "lucide-react";

export interface NoteItem {
  id: string;
  name: string;
  subject: string;
  uploadedAt: string;
  size: string;
  status: "Ready" | "Processing";
}

interface NoteCardProps {
  note: NoteItem;
  onRemove: (id: string) => void;
  onView: () => void;
  onReupload: () => void;
}

export function NoteCard({ note, onRemove, onReupload, onView }: NoteCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:border-primary/20 hover:shadow-card-hover sm:flex-row sm:items-center">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <FileText aria-hidden="true" size={21} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate font-semibold text-text-primary">
            {note.name}
          </h3>
          <span
            className={`rounded-full px-2 py-1 text-[11px] font-bold ${note.status === "Ready" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}
          >
            {note.status}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-secondary">
          {note.subject} · Uploaded {note.uploadedAt} · {note.size}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button
          aria-label={`View ${note.name}`}
          className="grid size-9 place-items-center rounded-lg text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-primary"
          onClick={onView}
          type="button"
        >
          <Eye size={18} />
        </button>
        <button
          aria-label={`Re-upload ${note.name}`}
          className="grid size-9 place-items-center rounded-lg text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-primary"
          onClick={onReupload}
          type="button"
        >
          <RotateCcw size={18} />
        </button>
        <button
          aria-label={`Remove ${note.name}`}
          className="grid size-9 place-items-center rounded-lg text-text-secondary transition hover:bg-danger/10 hover:text-danger focus-visible:outline-2 focus-visible:outline-danger"
          onClick={() => onRemove(note.id)}
          type="button"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </article>
  );
}
