
import Skeleton from './Skeleton'

export function VideoDetailSkeleton() {
  return (
    <div className="w-full space-y-8 animate-pulse">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Skeleton className="w-full h-full" />
        {/* Play button placeholder */}
        <Skeleton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full" />
      </div>

      {/* Title and metadata */}
      <div className="space-y-4 px-4">
        <Skeleton className="w-3/4 h-8" /> {/* Title */}
        <div className="flex space-x-4">
          <Skeleton className="w-20 h-6" /> {/* Year */}
          <Skeleton className="w-24 h-6" /> {/* Duration */}
          <Skeleton className="w-28 h-6" /> {/* Rating */}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
      </div>

      {/* Cast section */}
      <div className="px-4">
        <Skeleton className="w-40 h-6 mb-4" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full h-40 rounded-lg" />
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-1/2 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}