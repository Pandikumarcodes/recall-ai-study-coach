import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NotificationCard, type Notification } from "./NotificationCard";
import { NotificationEmpty } from "./NotificationEmpty";
import { NotificationHeader } from "./NotificationHeader";

const initialNotifications: Notification[] = [
  { id: "1", type: "streak", title: "12-Day Study Streak", description: "Keep your momentum going!", time: "2 minutes ago", read: false },
  { id: "2", type: "processing", title: "AI finished processing", description: "Physics Notes are ready.", time: "8 minutes ago", read: false },
  { id: "3", type: "revision", title: "Revision Reminder", description: "Electric Fields review is due today.", time: "Today • 2:00 PM", read: false },
  { id: "4", type: "quiz", title: "Quiz Completed", description: "You scored 9/10.", time: "Yesterday", read: true },
  { id: "5", type: "flashcards", title: "New Flashcards Generated", description: "Chemistry Chapter 4.", time: "Yesterday", read: true },
];
interface NotificationDrawerProps { open: boolean; onClose: () => void; }
export function NotificationDrawer({ open, onClose }: NotificationDrawerProps) {
  const [notifications, setNotifications] = useState(initialNotifications);
  useEffect(() => { const closeOnEscape = (event: KeyboardEvent) => { if (open && event.key === "Escape") onClose(); }; window.addEventListener("keydown", closeOnEscape); return () => window.removeEventListener("keydown", closeOnEscape); }, [open, onClose]);
  const unreadCount = notifications.filter((item) => !item.read).length;
  const markRead = (id: string) => setNotifications((items) => items.map((item) => item.id === id ? { ...item, read: true } : item));
  return createPortal(<AnimatePresence>{open && <><motion.button aria-label="Close notifications" className="fixed inset-0 z-40 bg-text-primary/30 backdrop-blur-[1px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} type="button" /><motion.aside aria-label="Notifications" className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-surface shadow-card-hover" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.24, ease: "easeOut" }}><NotificationHeader onClose={onClose} unreadCount={unreadCount} onMarkAllRead={() => setNotifications((items) => items.map((item) => ({ ...item, read: true })))} /><div className="min-h-0 flex-1 overflow-y-auto">{notifications.length ? notifications.map((notification) => <NotificationCard key={notification.id} notification={notification} onRead={markRead} />) : <NotificationEmpty />}</div><footer className="shrink-0 border-t border-border bg-surface p-4"><button className="w-full rounded-xl border border-border bg-surface py-2.5 text-sm font-semibold text-primary transition hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-primary" type="button">View All Notifications</button></footer></motion.aside></>}</AnimatePresence>, document.body);
}
