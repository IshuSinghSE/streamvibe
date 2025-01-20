import { cn } from '@/lib/utils';

// components/skeletons/Skeleton.tsx
const Skeleton = ({ className = '' }) => {
    return (
        <div
            className={cn(
                'animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md',
                className
            )}
        />
    );
};

export default Skeleton;
