import { X } from "lucide-react";

interface NotificationHeaderProps {
  onClose: () => void;
  unreadCount: number;
  onMarkAllRead: () => void;
}
export function NotificationHeader({
  onClose,
  unreadCount,
  onMarkAllRead,
}: NotificationHeaderProps) {
  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-5 py-4">
      <div>
        <h2 className="text-lg font-bold text-text-primary">Notifications</h2>
        <p className="mt-0.5 text-xs text-text-secondary">
          {unreadCount} unread
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-lg px-2 py-1.5 text-sm font-semibold text-primary transition hover:bg-primary/10 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-primary"
          onClick={onMarkAllRead}
          type="button"
        >
          Mark all as read
        </button>
        <button
          aria-label="Close notifications"
          className="grid size-9 place-items-center rounded-xl text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-primary"
          onClick={onClose}
          type="button"
        >
          <X size={19} />
        </button>
      </div>
    </header>
  );
}
