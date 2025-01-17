'use client';
import React from "react";
import Link from "next/link";

const NavBar = () => {
    const navItems = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Movies", href: "/movies" },
        { name: "Series", href: "/series" },
        { name: "Support", href: "/support" },
        { name: "Subscription", href: "/subscription" },
    ];

    const [active, setActive] = React.useState("Home");

    return (
        <nav className="hidden md:flex bg-neutral-950 px-2 py-2 ring-2 ring-neutral-800 rounded-md">
            <ul className="flex items-center justify-center space-x-1">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} onClick={() => setActive(item.name)}>
                            <p className={`px-2 py-1 rounded-md text-neutral-400 font-normal text-sm tracking-wider hover:text-white transition duration-200 ease-in-out transform ${active == item.name ? "text-white bg-neutral-800 scale-105" : ""}`}>
                                {item.name}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
