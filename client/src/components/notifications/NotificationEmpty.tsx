import { BellOff } from "lucide-react";
export function NotificationEmpty() {
  return (
    <div className="grid flex-1 place-items-center p-8 text-center">
      <div>
        <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-surface-muted text-text-secondary">
          <BellOff size={22} />
        </span>
        <h3 className="mt-4 font-bold text-text-primary">
          You’re all caught up
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          New learning updates will appear here.
        </p>
      </div>
    </div>
  );
}
