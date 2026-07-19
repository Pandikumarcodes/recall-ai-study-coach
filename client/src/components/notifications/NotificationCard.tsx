import { Bot, CalendarDays, FileText, Flame, NotebookPen } from "lucide-react";
const icons = {
  streak: Flame,
  processing: Bot,
  revision: CalendarDays,
  quiz: NotebookPen,
  flashcards: FileText,
};
export interface Notification {
  id: string;
  type: keyof typeof icons;
  title: string;
  description: string;
  time: string;
  read: boolean;
}
interface NotificationCardProps {
  notification: Notification;
  onRead: (id: string) => void;
}
export function NotificationCard({
  notification,
  onRead,
}: NotificationCardProps) {
  const Icon = icons[notification.type];
  return (
    <button
      className={`relative flex w-full gap-3 px-5 py-4 text-left transition hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-primary ${notification.read ? "" : "bg-primary/[0.035]"}`}
      onClick={() => onRead(notification.id)}
      type="button"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon size={19} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-text-primary">
          {notification.title}
        </span>
        <span className="mt-1 block text-sm leading-5 text-text-secondary">
          {notification.description}
        </span>
        <span className="mt-1.5 block text-xs text-text-secondary">
          {notification.time}
        </span>
      </span>
      {!notification.read && (
        <span
          aria-label="Unread"
          className="mt-1 size-2 rounded-full bg-primary"
        />
      )}
    </button>
  );
}
