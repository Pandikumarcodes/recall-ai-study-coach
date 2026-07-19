const history = [
  "Electric fields explained",
  "French Revolution review",
  "Cellular respiration quiz",
];
export function ConversationHistory() {
  return (
    <aside className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <h2 className="font-bold text-text-primary">Recent chats</h2>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-text-secondary">
        Today
      </p>
      {history.slice(0, 2).map((item) => (
        <button
          className="mt-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-text-secondary transition hover:bg-surface-muted hover:text-text-primary"
          key={item}
          type="button"
        >
          {item}
        </button>
      ))}
      <p className="mt-5 text-xs font-bold uppercase tracking-wide text-text-secondary">
        Yesterday
      </p>
      <button
        className="mt-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-text-secondary transition hover:bg-surface-muted hover:text-text-primary"
        type="button"
      >
        {history[2]}
      </button>
    </aside>
  );
}
