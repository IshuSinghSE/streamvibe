import { FooterIcons, FooterLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full max-w-screen-2xl mx-auto bg-neutral-950 py-8 mt-auto">
            <div className="container mx-auto px-8 md:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {FooterLinks.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-lg font-bold mb-4">
                            {category.name}
                        </h3>
                        <ul className="space-y-2">
                            {category.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-neutral-500 font-semibold hover:text-gray-800"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Connect with us</h3>
                    {/* Social media icons */}
                    <div className="flex gap-2">
                        {FooterIcons.map((icon) => (
                            <Link href="#" key={icon.name}>
                                <Image
                                    src={`/assets/icons/${icon.name}.svg`}
                                    alt={icon.name}
                                    width={48}
                                    height={48}
                                    className="bg-neutral-900 p-3 md:p-3 lg:p-2 xl:p-3 shadow-inner shadow-neutral-800 rounded-lg cursor-pointer"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-4 px-8 md:px-24 mt-8 pt-4 border-t border-neutral-800">
                <p className="text-center text-neutral-500 font-medium">
                    © 2025 StreamVibe. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 divide-x-2 divide-neutral-800">
                    <div className="text-center text-neutral-500 text-sm">
                        Terms of use
                    </div>
                    <div className="pl-4 text-center text-neutral-500 text-sm">
                        Privacy Policy
                    </div>
                    <div className="pl-4 text-center text-neutral-500 text-sm">
                        Cookie Policy
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
