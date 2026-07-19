import { useRef, useState } from "react";
import { CheckCircle2, FileUp, UploadCloud } from "lucide-react";
import { Button } from "../ui/Button";

type UploadState = "idle" | "dragging" | "uploading" | "success" | "error";
interface NotesUploadAreaProps {
  onUpload: (file: File) => void;
}

const allowedTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];
const maxFileSize = 10 * 1024 * 1024;
const progressClasses = ["w-0", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"];

export function NotesUploadArea({ onUpload }: NotesUploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>("idle");
  const [message, setMessage] = useState(
    "Drag and drop a file here, or choose one from your device.",
  );
  const [progress, setProgress] = useState(0);
  const handleFile = (file?: File) => {
    if (!file) return;
    if (!allowedTypes.includes(file.type) || file.size > maxFileSize) {
      setState("error");
      setMessage("Choose a PDF, DOCX, or TXT file no larger than 10 MB.");
      return;
    }
    setState("uploading");
    setProgress(0);
    setMessage(`Uploading ${file.name}…`);
    let currentProgress = 0;
    const interval = window.setInterval(() => {
      currentProgress += 20;
      setProgress(currentProgress);
      if (currentProgress < 100) return;
      window.clearInterval(interval);
      setState("success");
      setMessage(`${file.name} is ready for AI processing.`);
      onUpload(file);
    }, 140);
  };
  const icon =
    state === "success" ? (
      <CheckCircle2 size={26} />
    ) : (
      <UploadCloud size={26} />
    );
  return (
    <section
      aria-labelledby="upload-heading"
      className={`mt-8 rounded-2xl border border-dashed p-6 text-center transition sm:p-10 ${state === "dragging" ? "border-primary bg-primary/5" : state === "error" ? "border-danger bg-danger/5" : "border-border bg-surface"}`}
      onDragEnter={(event) => {
        event.preventDefault();
        setState("dragging");
      }}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={() => setState("idle")}
      onDrop={(event) => {
        event.preventDefault();
        setState("idle");
        handleFile(event.dataTransfer.files[0]);
      }}
    >
      <input
        accept=".pdf,.docx,.txt"
        className="sr-only"
        onChange={(event) => handleFile(event.target.files?.[0])}
        ref={inputRef}
        type="file"
      />
      <span
        className={`mx-auto grid size-14 place-items-center rounded-2xl ${state === "error" ? "bg-danger/10 text-danger" : state === "success" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"}`}
      >
        {icon}
      </span>
      <h2
        className="mt-5 text-lg font-bold text-text-primary"
        id="upload-heading"
      >
        Upload study materials
      </h2>
      <p
        aria-live="polite"
        className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary"
      >
        {message}
      </p>
      {state === "uploading" && (
        <div
          aria-label={`${progress}% uploaded`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
          className="mx-auto mt-5 h-2 w-full max-w-md overflow-hidden rounded-full bg-surface-muted"
          role="progressbar"
        >
          <div className={`h-full rounded-full bg-primary transition-all duration-150 ${progressClasses[progress / 20]}`} />
        </div>
      )}
      <Button
        className="mt-6 px-5 py-3"
        href="#upload-heading"
        onClick={(event) => {
          event.preventDefault();
          inputRef.current?.click();
        }}
      >
        <FileUp size={17} /> Choose a file
      </Button>
      <p className="mt-5 text-xs text-text-secondary">
        PDF, DOCX, or TXT · Maximum file size 10 MB
      </p>
    </section>
  );
}
