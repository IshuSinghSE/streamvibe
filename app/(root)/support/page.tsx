import FlashCard from '@/components/FlashCard';
import FAQ from '@/components/homepage/FAQ';
import SupportForm from '@/components/SupportForm';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <section className="section-layout">
            <div className="flex flex-col justify-center items-center p-8 md:px-24 space-y-4 bg-gradient-to-t from-transparent to-black opacity-90">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <div className="space-y-4 md:space-y-8">
                        <div className="text-left space-y-2 md:space-y-4">
                            <h1 className="text-3xl md:text-4xl font-semibold">
                                Welcome to our support page!
                            </h1>
                            <h4 className="text-md text-neutral-500 font-medium tracking-wide">
                                We&apos;re here to help you with any problems
                                you may be having with our product.
                            </h4>
                        </div>
                        <div className="w-full border-4 border-neutral-800 rounded-xl overflow-hidden">
                            <Image
                                src="/assets/images/support.png"
                                alt="Support"
                                width={360}
                                height={360}
                                priority={false}
                                className="rounded-lg border-4 border-neutral-800"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 w-full">
                        <SupportForm />
                    </div>
                </div>
                {/* FAQ */}
                <div className="relative w-full py-8">
                    <h3 className="capitalize text-2xl font-bold">
                        Frequently Asked Questions
                    </h3>
                    <div className="md:px-8 rounded-lg mt-4">
                        <FAQ />
                    </div>
                </div>
                {/* FAQ End */}

                <FlashCard />
            </div>
        </section>
    );
};

export default page;
