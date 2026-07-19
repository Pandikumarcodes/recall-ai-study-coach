import { Download, Share2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Toast } from "../ui/Toast";

interface Profile {
  avatar: string;
  bio: string;
  goal: string;
  name: string;
}
const defaultProfile: Profile = {
  avatar: "S",
  bio: "Building better study habits with Recall.",
  goal: "Master my exam topics",
  name: "Student",
};
const storageKey = "recall-student-profile";

export function ProfileHeader() {
  const [profile, setProfile] = useState<Profile>(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as Profile) : defaultProfile;
  });
  const [draft, setDraft] = useState(profile);
  const [editing, setEditing] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [toast, setToast] = useState("");
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  };
  const save = () => {
    localStorage.setItem(storageKey, JSON.stringify(draft));
    setProfile(draft);
    setEditing(false);
    notify("Profile changes saved");
  };
  const summary = `${profile.name}'s Recall progress: 12-day streak, 84% recall score, 24 notes uploaded, and 18 quizzes completed.`;
  const copySummary = async (message: string) => {
    await navigator.clipboard?.writeText(summary);
    notify(message);
  };
  return (
    <>
      <header className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid size-16 place-items-center rounded-2xl bg-primary text-xl font-bold text-text-inverse">
              {profile.avatar}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold text-text-primary">
                  {profile.name}
                </h1>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  AI Learner
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                Learning with Recall since July 2026
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-surface-muted"
              onClick={() => setEditing(true)}
              type="button"
            >
              Edit Profile
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-dark"
              onClick={() => setSharing(true)}
              type="button"
            >
              <Share2 size={16} /> Share Progress
            </button>
          </div>
        </div>
      </header>
      <Modal
        onClose={() => setEditing(false)}
        open={editing}
        title="Edit Profile"
      >
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-text-primary">
            Avatar upload (mock)
            <input
              className="mt-2 block w-full text-sm text-text-secondary"
              onChange={(event) =>
                setDraft({
                  ...draft,
                  avatar:
                    event.target.files?.[0]?.name.charAt(0).toUpperCase() ||
                    draft.avatar,
                })
              }
              type="file"
            />
          </label>
          <label className="block text-sm font-semibold text-text-primary">
            Name
            <input
              className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm"
              onChange={(event) =>
                setDraft({ ...draft, name: event.target.value })
              }
              value={draft.name}
            />
          </label>
          <label className="block text-sm font-semibold text-text-primary">
            Learning Goal
            <input
              className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm"
              onChange={(event) =>
                setDraft({ ...draft, goal: event.target.value })
              }
              value={draft.goal}
            />
          </label>
          <label className="block text-sm font-semibold text-text-primary">
            Bio (optional)
            <textarea
              className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm"
              onChange={(event) =>
                setDraft({ ...draft, bio: event.target.value })
              }
              rows={3}
              value={draft.bio}
            />
          </label>
          <div className="flex justify-end gap-2">
            <button
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-text-secondary hover:bg-surface-muted"
              onClick={() => setEditing(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-dark"
              onClick={save}
              type="button"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        onClose={() => setSharing(false)}
        open={sharing}
        title="Share Progress"
      >
        <p className="rounded-xl bg-surface-muted p-4 text-sm leading-6 text-text-secondary">
          {summary}
        </p>
        <div className="mt-5 grid gap-2">
          <button
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface-muted"
            onClick={() => copySummary("Progress summary copied")}
            type="button"
          >
            Copy Progress Summary
          </button>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface-muted"
            onClick={() => notify("Progress card download prepared")}
            type="button"
          >
            <Download size={16} /> Download Progress Card (PNG)
          </button>
          <button
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface-muted"
            onClick={() => copySummary("LinkedIn summary copied")}
            type="button"
          >
            Share on LinkedIn
          </button>
          <button
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface-muted"
            onClick={() => copySummary("X summary copied")}
            type="button"
          >
            Share on X
          </button>
        </div>
      </Modal>
      <Toast message={toast} />
    </>
  );
}
