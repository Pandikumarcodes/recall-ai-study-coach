import { motion } from "framer-motion";
import { CheckCircle2, LoaderCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const steps = ["Uploading notes", "Extracting content", "Generating summary", "Creating flashcards", "Creating quiz questions", "Building knowledge map"];

export function ProcessingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step === steps.length) { const timer = window.setTimeout(() => navigate("/app/study", { replace: true }), 900); return () => window.clearTimeout(timer); }
    const timer = window.setTimeout(() => setStep((current) => current + 1), 850);
    return () => window.clearTimeout(timer);
  }, [navigate, step]);
  const complete = step === steps.length;
  const progress = Math.round((step / steps.length) * 100);
  return <PageContainer><main className="mx-auto max-w-2xl py-8 sm:py-14"><motion.section animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-3xl border border-primary/15 bg-surface p-6 shadow-card sm:p-9" initial={{ opacity: 0, y: 10 }}><div className="flex items-start gap-4"><span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">{complete ? <CheckCircle2 size={25} /> : <LoaderCircle className="animate-spin" size={25} />}</span><div><p className="text-sm font-bold text-primary">AI processing</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-text-primary">{complete ? "Your study materials are ready!" : "Preparing your study materials"}</h1><p className="mt-2 text-sm leading-6 text-text-secondary">{complete ? "Taking you to your study workspace now." : "Recall is turning your notes into focused learning tools."}</p></div></div><div aria-label={`${progress}% complete`} aria-valuemax={100} aria-valuemin={0} aria-valuenow={progress} className="mt-8 h-2 overflow-hidden rounded-full bg-surface-muted" role="progressbar"><motion.div animate={{ width: `${progress}%` }} className="h-full rounded-full bg-primary" transition={{ duration: 0.35 }} /></div><p className="mt-2 text-right text-xs font-semibold text-text-secondary">{progress}% complete</p><ol className="mt-7 space-y-3">{steps.map((item, index) => <li className="flex items-center gap-3 text-sm" key={item}><span className={`grid size-6 place-items-center rounded-full ${index < step ? "bg-success/10 text-success" : index === step ? "bg-primary/10 text-primary" : "bg-surface-muted text-text-secondary"}`}>{index < step ? <CheckCircle2 size={15} /> : index === step ? <Sparkles size={14} /> : index + 1}</span><span className={index <= step ? "font-semibold text-text-primary" : "text-text-secondary"}>{item}</span></li>)}</ol></motion.section></main></PageContainer>;
}
