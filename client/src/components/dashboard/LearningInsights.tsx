import { CalendarClock, CircleAlert, Trophy } from "lucide-react";
import { dashboardMock } from "../../mocks/dashboard";

const insightIcons = { alert: CircleAlert, trophy: Trophy, calendar: CalendarClock };

export function LearningInsights() {
  return (
    <section aria-labelledby="learning-insights-heading" className="mt-12 pb-4 sm:mt-14">
      <h2 className="text-xl font-bold tracking-tight" id="learning-insights-heading">
        Learning insights
      </h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {dashboardMock.learningInsights.map((insight) => {
          const Icon = insightIcons[insight.icon as keyof typeof insightIcons];
          return (
            <article className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition duration-200 hover:border-primary/20 hover:shadow-card-hover" key={insight.label}>
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-surface-muted ${insight.tone}`}>
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-text-primary">{insight.label}</h3>
                <p className="mt-1 text-sm leading-6 text-text-secondary">{insight.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
