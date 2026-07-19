interface NotificationBadgeProps {
  count: number;
}
export function NotificationBadge({ count }: NotificationBadgeProps) {
  return (
    <span
      aria-label={`${count} unread notifications`}
      className="grid size-5 place-items-center rounded-full bg-danger text-[10px] font-bold text-text-inverse"
    >
      {count}
    </span>
  );
}
