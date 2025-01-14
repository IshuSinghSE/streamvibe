import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { GENRES } from "@/lib/constant";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const GenreCard = () => {
    return (
        <>
            <Carousel className="relative w-full max-w-7xl">
                <CarouselContent className="ml-1 md:ml-8 gap-2 md:gap-4">
                    {GENRES.map((genre) => (
                        <CarouselItem
                            key={genre.name}
                            className="group relative basis-48 lg:basis-52 flex-shrink-0 flex flex-col gap-4 bg-zinc-800 p-4 rounded-lg border-2 border-zinc-700 hover:border-zinc-600 transition-colors duration-100 ease-in-out"
                        >
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-100 rounded-lg"></div>
                            <div className="rounded-lg">
                                <Image
                                    src={genre.image}
                                    alt={genre.name}
                                    width={200}
                                    height={200}
                                    className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                />
                            </div>
                            <div className="flex items-center justify-between px-2 text-zinc-100 group-hover:text-zinc-400 transition-colors duration-200 ease-in-out z-20">
                                <p>{genre.name}</p>
                                <ArrowRightIcon width={24} height={24} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-8 size-10" />
                <CarouselNext className="mr-8 size-10" />
            </Carousel>
        </>
    );
};

export default GenreCard;
