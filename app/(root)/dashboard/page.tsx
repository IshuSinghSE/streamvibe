import ContentCardCarousel from '@/components/ContentCardCarousel';
import HeroCarousel from '@/components/homepage/HeroCarousel';
import { MOVIES } from '@/lib/constant';
import { filterCardStats } from '@/lib/utils';
import { Suspense } from 'react';

const Dashboard = () => {
    return (
        <section className="section-layout">
            <Suspense fallback={<div>Loading...</div>} >
            <HeroCarousel />
            </Suspense>

            <div className="px-8 md:px-24 flex flex-col gap-12 items-start justify-center bg-gradient-to-t from-transparent to-black opacity-90">
                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Continue Watching
                    </h2>
                    <ContentCardCarousel items={filterCardStats(MOVIES, "duration")} 
                    variant='history'/>
                </div>
                <div className="w-full space-y-4">
                <h2 className="text-xl font-semibold tracking-wide">Trending Movies</h2>
                    <ContentCardCarousel
                        items={filterCardStats(MOVIES, 'duration', 'views')}
                        variant='trending'
                    />
                </div>
                <div className="w-full space-y-4">
                <h2 className="text-xl font-semibold tracking-wide">Trending Shows</h2>
                    <ContentCardCarousel
                        items={filterCardStats(MOVIES, 'duration', 'season')}
                        variant='shows'
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
