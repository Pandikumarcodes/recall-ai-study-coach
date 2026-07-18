import { SkeletonLoader } from "../feedback/SkeletonLoader";

export function DashboardSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading dashboard" className="space-y-10">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="mt-4 h-9 w-3/4 max-w-md" />
        <SkeletonLoader className="mt-3 h-5 w-full max-w-xl" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <SkeletonLoader className="h-44" key={item} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <SkeletonLoader className="h-72" key={item} />
        ))}
      </div>
    </div>
  );
}
