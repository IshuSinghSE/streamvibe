
import Skeleton from './Skeleton'

export function DashboardSkeleton() {
  return (
    <div className="w-full space-y-6 p-4">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <Skeleton className="w-48 h-8" /> {/* Page title */}
        <Skeleton className="w-32 h-10 rounded-full" /> {/* Profile button */}
      </div>

      {/* Continue Watching Section */}
      <div className="space-y-4">
        <Skeleton className="w-40 h-6" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full aspect-video rounded-lg" />
              <Skeleton className="w-3/4 h-4" />
              <div className="w-full h-1">
                <Skeleton className="w-3/4 h-full" /> {/* Progress bar */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="space-y-4">
        <Skeleton className="w-48 h-6" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full aspect-[2/3] rounded-lg" />
              <Skeleton className="w-3/4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}