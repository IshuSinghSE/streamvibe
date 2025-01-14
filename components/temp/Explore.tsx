"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { DEVICES, GENRES } from "@/lib/constant";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import FAQ from "./homepage/FAQ";
import { Card, CardContent, CardHeader } from "./ui/card";
import PlanCard from "./PlanCard";
import FlashCard from "./FlashCard";
import Hero from "./Hero";

const Explore = () => {
    return (
        <section className="relative w-full min-h-screen ">
            <Hero />
            <div className="px-8 md:px-24 flex flex-col gap-16 items-start justify-center bg-gradient-to-t from-transparent to-black opacity-90">
                <div className="space-y-2 ">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Explore our wide variety of categories
                    </h1>
                    <h3 className="tracking-wide text-zinc-400">
                        Whether you&apos;re looking for a comedy to make you
                        laugh. a drama to make you think. or a documentary to
                        learn something new
                    </h3>
                </div>

                {/* Genre Tiles Carousel */}
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
                {/* Genre Tiles Carousel End */}

                {/* Devices Section */}
                <div className="relative flex flex-col gap-4">
                    <div className="space-y-1 ">
                        <h2 className="text-xl font-bold tracking-wide">
                            We Provide you streaming experience across various
                            devices.
                        </h2>
                        <h4 className="tracking-wide text-mutedForeground text-md">
                            With StreamVibe, you can enjoy your favorite movies
                            and TV shows anytime, anywhere.
                        </h4>
                    </div>

                    <div className="relative flex flex-col md:flex-row md:flex-auto gap-4">
                        {DEVICES.map((device) => (
                            <Card key={device.name} className="relative">
                                <div className="absolute w-full inset-0 z-0 bg-gradient-to-bl from-red-800 via-transparent to-transparent opacity-20 rounded-lg"></div>
                                <CardHeader>
                                    <div className="flex items-center justify-start space-x-4 z-10">
                                        <device.icon className="h-12 w-12 text-red-600 p-2 bg-zinc-950 rounded-xl ring-1 ring-zinc-800" />
                                        <h3 className="text-xl font-bold">
                                            {device.name}
                                        </h3>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-zinc-500 z-10 max-w-prose">
                                        {device.description}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                {/* Devices Section End */}

                {/* FAQ */}
                <div className="relative w-full">
                    <h3 className="capitalize text-2xl font-bold">
                        Frequently Asked Questions
                    </h3>
                    <div className="md:px-8 rounded-lg mt-4">
                        <FAQ />
                    </div>
                </div>
                {/* FAQ End */}

                {/* Plans */}
                <div className="relative w-full flex flex-col gap-4">
                    <div className="space-y-3 ">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Choose the plan that&apos;s right for you
                        </h2>
                        <h4 className="tracking-wide text-mutedForeground text-md">
                            Join StreamVibe and select from our flexible
                            subscription options tailored to suit your viewing
                            preferences. Get ready for non-stop entertainment!
                        </h4>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4">
                        <PlanCard />
                    </div>
                </div>
                {/* Plans End */}
                <div className="relative w-full">
                    <FlashCard />
                </div>
            </div>
        </section>
    );
};

export default Explore;
