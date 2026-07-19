import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
interface ToastProps { message: string; }
export function Toast({ message }: ToastProps) { return <AnimatePresence>{message && <motion.div className="fixed bottom-5 right-5 z-60 flex items-center gap-2 rounded-xl bg-text-primary px-4 py-3 text-sm font-semibold text-text-inverse shadow-card-hover" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}><CheckCircle2 className="text-success" size={18} />{message}</motion.div>}</AnimatePresence>; }
