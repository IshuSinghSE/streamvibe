import ContentCardCarousel from '@/components/ContentCardCarousel';
import HeroCarousel from '@/components/homepage/HeroCarousel';
import { GENRES, MOVIES } from '@/lib/constant';
import { filterCardStats } from '@/lib/utils';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

const Movies = () => {
    return (
      <section className="section-layout">
      <Suspense fallback={<div>Loading...</div>} >
      <HeroCarousel />
      </Suspense>

      <div className="px-8 md:px-24 flex flex-col gap-12 items-start justify-center bg-gradient-to-t from-transparent to-black opacity-90">
          <div className="w-full space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Trending Now</h2>
              <ContentCardCarousel
                  items={filterCardStats(MOVIES, 'duration', 'views')}
                  variant='trending'
              />
          </div>
          <div className="w-full space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">New  Release</h2>
              <ContentCardCarousel
                  items={filterCardStats(MOVIES, 'duration', 'views')}
                  variant='released'
              />
          </div>
          <div className="w-full space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Must watch</h2>
              <ContentCardCarousel
                  items={filterCardStats(MOVIES, 'duration', 'rating')}
                  variant='mustwatch'
              />
          </div>
          <div className="w-full space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Must watch</h2>
              <ContentCardCarousel
                  items={filterCardStats(GENRES, 'title')}
                  variant='genre'
                  stats={<ArrowRightIcon width={24} height={24} />}
              />
          </div>
      </div>
  </section>
    );
};

export default Movies;
