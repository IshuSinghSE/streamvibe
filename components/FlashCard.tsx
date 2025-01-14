import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const FlashCard = () => {
    return (
        <div className="mb-24">
            <Card className="relative md:w-full md:h-40 aspect-square md:aspect-auto dark:bg-neutral-900 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 bg-cover bg-center shadow-md dark:shadow-neutral-800"
                style={{
                    backgroundImage:
                        "url('/assets/images/movies-grid-desktop.jpg')",
                }}>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-red-500 to-black opacity-60 z-10 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent opacity-80 z-10 rounded-xl"></div>
            

                <CardHeader>
                    <CardTitle className="px-16 md:p-0 text-2xl text-center md:text-left z-20">Start your free trial today!</CardTitle>
                    <CardDescription className="text-center text-md md:text-left md:text-sm z-20">
                        This is a clear and concise call to action that
                        encourages users to sign up for a free trial of
                        StreamVlbe.
                    </CardDescription>
                </CardHeader>
                <CardContent className="md:px-16 z-20 flex items-center justify-center md:justify-start gap-4">
                    <Button size={"lg"} className="dark:hover:bg-red-700 dark:bg-red-600 dark:text-white tracking-wider text-md font-semibold">
                        Start Free Trial
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default FlashCard;
