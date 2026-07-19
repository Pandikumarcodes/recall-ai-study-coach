import { Component, type ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  render() {
    if (!this.state.hasError) return this.props.children;
    return <main className="mx-auto grid min-h-[60vh] max-w-xl place-items-center px-4 text-center"><section className="rounded-2xl border border-border bg-surface p-8 shadow-card"><span className="mx-auto grid size-12 place-items-center rounded-2xl bg-danger/10 text-danger"><AlertTriangle aria-hidden="true" size={24} /></span><h1 className="mt-5 text-xl font-bold text-text-primary">Something went wrong</h1><p className="mt-2 text-sm leading-6 text-text-secondary">Please refresh the page to return to your study workspace.</p><button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-dark" onClick={() => window.location.reload()} type="button"><RotateCcw size={16} /> Refresh page</button></section></main>;
  }
}
