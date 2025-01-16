import React from "react";
import { PlayIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative h-screen w-full max-w-screen-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
            <div
                className="w-full h-full flex justify-center items-stretch bg-cover md:bg-contain bg-center"
                style={{
                    backgroundImage:
                        "url('/assets/images/movies-grid-desktop.jpg')",
                }}
            >
                <div className="relative w-full flex flex-col items-center justify-end space-y-6 md:space-y-4 text-center p-16 md:px-[15%] rounded-lg bg-gradient-to-b from-transparent to-black opacity-100">
                    <h1 className="text-white text-3xl md:text-4xl font-semibold">
                        The Best Streaming Experience
                    </h1>
                    <h3 className="text-zinc-400 line-clamp-3 text-md ">
                        StreamVibe is the best streaming experience for watching
                        your favorite movies and shows on demand, anytime,
                        anywhere. With StreamVibe, you can enjoy a wide variety
                        of content, including the latest blockbusters, classic
                        movies, popular TV shows, and more. You can also create
                        your own watchlists, so you can easily find the content
                        you want to watch.
                    </h3>
                    <Link href="/login">
                        <Button className="dark:bg-primary-800 dark:hover:bg-primary-600 dark:text-white font-medium tracking-wide text-md">
                            <PlayIcon />
                            Start Watching Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
