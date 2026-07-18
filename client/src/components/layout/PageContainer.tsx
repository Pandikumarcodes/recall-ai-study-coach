import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-9 xl:px-10 xl:py-10">
      {children}
    </div>
  );
}
