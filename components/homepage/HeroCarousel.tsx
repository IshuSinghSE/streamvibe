'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
    HandThumbUpIcon,
    PlayIcon,
    PlusIcon,
    SpeakerWaveIcon
} from '@heroicons/react/24/solid';

export default function HeroCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="relative w-full max-w-screen-2xl mx-auto px-8 py-8 md:px-28 md:pt-4 gradient-bottom">
            <Carousel
                setApi={setApi}
                opts={{
                    loop: true,
                    skipSnaps: true
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnMouseEnter: true,
                        stopOnInteraction: false
                    })
                ]}
                className="relative"
            >
                {/* <div className="absolute bottom-0 left-0 z-10 hero-gradient pointer-events-none"></div> */}
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-b-0 border-x-0">
                                <CardContent className="relative p-0 aspect-square md:aspect-video z-20">
                                    <div className="absolute bottom-0 left-0 z-10 hero-gradient pointer-events-none"></div>
                                    <Image
                                        src="/assets/images/container-wide.jpg"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 100vw"
                                        alt={`Thumbnail ${index}`}
                                        fill={true}
                                        priority={true}
                                        lazyBoundary='200px'
                                        className="relative group-hover:scale-105 transition-transform duration-200 ease-in-out w-full h-full object-cover rounded-lg select-none"
                                    />
                                    <div className="absolute w-full bottom-0 left-0 flex-col flex space-y-6 md:space-y-3 text-center pb-16 px-16 md:px-[15%] rounded-lg z-50 -mb-10 md:mb-1">
                                        <h1 className="text-white text-xl md:text-3xl font-semibold">
                                            Avenger: Endgame
                                        </h1>
                                        <h3 className="hidden md:block text-zinc-400 line-clamp-3 text-sm">
                                            With the help of remaining allies,
                                            the Avengers must assemble once more
                                            in order to undo Thanos&apos;s
                                            actions and undo the chaos to the
                                            universe, no matter what
                                            consequences may be in store, and no
                                            matter who they face... Avenge the
                                            fallen.
                                        </h3>
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                                            <Link href="/login">
                                                <Button className="dark:bg-primary-800 dark:hover:bg-primary-600 dark:text-white font-medium tracking-wide text-sm px-24 md:px-4">
                                                    <PlayIcon />
                                                    Play Now
                                                </Button>
                                            </Link>
                                            <div className="flex justify-center items-center space-x-2">
                                                <Button
                                                    size="icon"
                                                    className="dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 rounded-lg ring-1 dark:ring-neutral-800 shadow-md shadow-neutral-800"
                                                >
                                                    <PlusIcon />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    className="dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 rounded-lg ring-1 dark:ring-neutral-800 shadow-md shadow-neutral-800"
                                                >
                                                    <HandThumbUpIcon />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    className="dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 rounded-lg ring-1 dark:ring-neutral-800 shadow-md shadow-neutral-800"
                                                >
                                                    <SpeakerWaveIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex left-4 top-full -translate-y-12 z-50" />
                <CarouselNext className="hidden md:flex right-4 top-full -translate-y-12 z-50" />
                {/* <div className="absolute bottom-0 -left-8 w-full translate-x-1/2 md:py-2 text-sm text-muted-foreground z-20">
                    Slide {current} of {count}
                </div> */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-1 z-50  rounded-full items-center justify-center">
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`first:rounded-full last:rounded-full w-6 h-1 cursor-pointer ${
                                current === index + 1
                                    ? 'bg-primary-600 border-2 border-transparent'
                                    : 'bg-neutral-700'
                            }`}
                        ></div>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
