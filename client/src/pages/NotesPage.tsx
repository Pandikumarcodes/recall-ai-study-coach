import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import { NoteCard, type NoteItem } from "../components/notes/NoteCard";
import { NotesUploadArea } from "../components/notes/NotesUploadArea";
import { EmptyState } from "../components/feedback/EmptyState";
import { PageContainer } from "../components/layout/PageContainer";

const initialNotes: NoteItem[] = [
  {
    id: "1",
    name: "Physics - Electric Fields.pdf",
    subject: "Physics",
    uploadedAt: "Today",
    size: "2.4 MB",
    status: "Ready",
  },
  {
    id: "2",
    name: "Cellular Respiration.docx",
    subject: "Biology",
    uploadedAt: "Yesterday",
    size: "840 KB",
    status: "Processing",
  },
];

export function NotesPage() {
  const [notes, setNotes] = useState(initialNotes);
  const addNote = (file: File) =>
    setNotes((currentNotes) => [
      {
        id: crypto.randomUUID(),
        name: file.name,
        subject: "Uncategorized",
        uploadedAt: "Just now",
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        status: "Processing",
      },
      ...currentNotes,
    ]);
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <header className="max-w-2xl">
          <p className="text-sm font-bold text-primary">Study materials</p>
          <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-text-primary sm:text-4xl">
            Notes
          </h1>
          <p className="mt-3 text-base leading-7 text-text-secondary">
            Upload PDFs, Word documents, or text files. Recall will prepare them
            for your next study session.
          </p>
        </header>
        <NotesUploadArea onUpload={addNote} />
        <section
          aria-labelledby="recent-notes-heading"
          className="mt-12 sm:mt-14"
        >
          <div>
            <h2
              className="text-xl font-bold tracking-tight text-text-primary"
              id="recent-notes-heading"
            >
              Recent notes
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Your latest study materials, ready when you are.
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {notes.length > 0 ? (
              notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onRemove={(id) =>
                    setNotes((currentNotes) =>
                      currentNotes.filter((item) => item.id !== id),
                    )
                  }
                  onReupload={() => undefined}
                />
              ))
            ) : (
              <EmptyState
                description="Upload your first lecture or study guide to start building your knowledge base."
                icon={FileText}
                title="No notes uploaded yet"
              />
            )}
          </div>
        </section>
      </motion.div>
    </PageContainer>
  );
}
