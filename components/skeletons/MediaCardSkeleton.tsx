
import Skeleton from './Skeleton'

export function MediaCardSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="w-full aspect-[2/3] rounded-lg" />
      <Skeleton className="w-3/4 h-4" />
      <div className="flex space-x-2">
        <Skeleton className="w-12 h-4" />
        <Skeleton className="w-12 h-4" />
      </div>
    </div>
  )
}

// For grid layouts
export function MediaGridSkeleton({ count = 12 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[...Array(count)].map((_, i) => (
        <MediaCardSkeleton key={i} />
      ))}
    </div>
  )
}