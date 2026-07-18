interface SkeletonLoaderProps {
  className?: string;
}

export function SkeletonLoader({ className = "" }: SkeletonLoaderProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-xl bg-surface-muted ${className}`}
    />
  );
}
