import { FolderOpen } from "lucide-react";
import type { StudyMaterial } from "../../types/dashboard";
import { EmptyState } from "../feedback/EmptyState";
import { StudyMaterialCard } from "./StudyMaterialCard";

interface RecentMaterialsProps {
  materials: StudyMaterial[];
}

export function RecentMaterials({ materials }: RecentMaterialsProps) {
  return (
    <section
      aria-labelledby="recent-materials-heading"
      className="mt-12 sm:mt-14"
      id="recent-materials"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2
            className="text-xl font-bold tracking-tight"
            id="recent-materials-heading"
          >
            Recent study materials
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Pick up where you left off.
          </p>
        </div>
        <a
          className="text-sm font-semibold text-primary transition hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href="#main-content"
        >
          View all
        </a>
      </div>
      <div className="mt-5">
        {materials.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {materials.map((material) => (
              <StudyMaterialCard key={material.title} material={material} />
            ))}
          </div>
        ) : (
          <EmptyState
            description="Upload your first note to turn it into a focused study session."
            icon={FolderOpen}
            title="No study materials yet"
          />
        )}
      </div>
    </section>
  );
}
