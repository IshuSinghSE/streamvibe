'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import {
    ClockIcon,
    EyeIcon,
    RectangleStackIcon,
    StarIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

interface ContentProps {
    image: string;
    title?: string | React.ReactNode;
    stats?: string | React.ReactNode;
}

interface ContentCardProps {
    items?: ContentProps[];
    variant?:
        | 'genre'
        | 'trending'
        | 'released'
        | 'mustWatch'
        | 'shows'
        | 'history';
    image?: string;
    title?: string;
    badge?: string;
    stats?: React.ReactNode;
}

const ContentCardCarousel = ({
    items,
    variant,
    image,
    title,
    stats
}: ContentCardProps) => {
    const getRandomWidth = () => `${Math.floor(Math.random() * 10) + 1}0%`;
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
        <>
            <Carousel
                className="relative w-full "
                opts={{
                    skipSnaps: true,
                    dragFree: true
                }}
                setApi={setApi}
            >
                <CarouselContent className="ml-1 md:ml-8 gap-4 md:gap-4 py-4">
                    {items ? (
                        items?.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="group relative basis-48 lg:basis-52 flex-shrink-0 flex flex-col gap-4 bg-neutral-900 p-2 rounded-lg border-2 border-neutral-800 hover:border-zinc-600 transition-colors duration-100 ease-in-out shadow-md shadow-neutral-800"
                            >
                                {variant === 'genre' && (
                                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-100 rounded-lg"></div>
                                )}
                                {/* <div className="relative rounded-lg flex justify-center align-center overflow-hidden bg-red-700"> */}
                                <Image
                                    src={item.image}
                                    alt={`Thumbnail ${index}`}
                                    width={200}
                                    height={200}
                                    priority={false}
                                    loading="lazy"
                                    className={cn(
                                        'group-hover:scale-95 transition-transform duration-200 ease-in-out rounded-lg select-none',
                                        variant === 'history' && 'w-full h-full'
                                    )}
                                />
                                {variant === 'history' && (
                                    <div className="absolute h-1 bottom-5 left-4 rounded-full bg-neutral-700 w-5/6 group-hover:scale-95 transition-transform duration-200 ease-in-out ">
                                        <div
                                            className={cn(
                                                'absolute top-0 left-0 h-full bg-red-600 rounded-full'
                                            )}
                                            style={{
                                                width: getRandomWidth()
                                            }}
                                        ></div>
                                    </div>
                                )}
                                {/* </div> */}
                                <div
                                    className={cn(
                                        'relative flex items-center justify-between px-0 text-zinc-100 group-hover:text-zinc-400 transition-colors duration-200 ease-in-out z-20 select-none',
                                        variant === 'genre' && 'px-2',
                                        variant === 'history' && 'hidden'
                                    )}
                                >
                                    {variant === 'genre' ? (
                                        <p>{item.title}</p>
                                    ) : variant === 'trending' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <ClockIcon className="w-4 h-4" />
                                            {item.title}
                                        </div>
                                    ) : variant === 'released' ? (
                                        <div className=" w-full -mb-4 md:mb-0 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-[11px] text-center font-medium">
                                            Released on {item.title}
                                        </div>
                                    ) : variant === 'mustWatch' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <ClockIcon className="w-4 h-4" />
                                            {item.title}
                                        </div>
                                    ) : variant === 'shows' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <ClockIcon className="w-4 h-4" />
                                            {item.title}
                                        </div>
                                    ) : variant === 'history' ? null : (
                                        <p>{item.title}</p>
                                    )}
                                    {variant === 'genre' ? (
                                        stats
                                    ) : variant === 'trending' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <EyeIcon className="w-4 h-4" />
                                            {item.stats}
                                        </div>
                                    ) : variant ===
                                      'released' ? null : variant ===
                                      'mustWatch' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <StarIcon className="w-4 h-4" />
                                            {item.stats}
                                        </div>
                                    ) : variant === 'shows' ? (
                                        <div className=" flex items-center justify-center gap-1 py-1 px-2 rounded-full bg-neutral-950 text-neutral-300 text-xs">
                                            <RectangleStackIcon className="w-4 h-4" />
                                            {item.stats}
                                        </div>
                                    ) : (
                                        <p>{item.stats}</p>
                                    )}
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <CarouselItem className="group relative basis-48 lg:basis-52 flex-shrink-0 flex flex-col gap-4 bg-zinc-800 p-4 rounded-lg border-2 border-zinc-700 hover:border-zinc-600 transition-colors duration-100 ease-in-out">
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-100 rounded-lg"></div>
                            <div className="rounded-lg">
                                <Image
                                    src={image || ''}
                                    alt={title || 'Thumbnail'}
                                    width={200}
                                    height={200}
                                    className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                />
                            </div>
                            <div className="flex items-center justify-between px-2 text-zinc-100 group-hover:text-zinc-400 transition-colors duration-200 ease-in-out z-20">
                                <p>{title}</p>
                                {stats}
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious className="ml-8 size-6 hidden md:flex" />
                <CarouselNext className="mr-8 size-6 hidden md:flex" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex md:flex rounded-full items-center justify-center transition-all duration-200 ease-in-out w-1/3 md:w-48">
                    <div className="relative w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-primary-600 transition-all duration-200 ease-in-out"
                            style={{ width: `${(current / count) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default ContentCardCarousel;
