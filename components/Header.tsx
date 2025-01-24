'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BellIcon } from '@heroicons/react/24/outline';
import {
    // Bars3BottomRightIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/solid';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MenuBar } from './MenuBar';
import NavBar from './NavBar';
import { AvatarFallback } from './ui/avatar';
import Skeleton from './skeletons/Skeleton';

const Header = () => {
    const { data: user, status } = useSession();
    // console.log(user, status);
    const [showHeader, setShowHeader] = useState(true);
    const [blurHeader, setBlurHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) {
                    // if scroll down hide the header
                    setShowHeader(false);
                } else {
                    if (window.scrollY < window.innerHeight - 100) {
                        setBlurHeader(false);
                    } else {
                        setBlurHeader(true);
                    }
                    // if scroll up show the header
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <header
            className={`w-full h-20 max-w-screen-2xl mx-auto flex items-center justify-between px-8 md:px-24 py-2 fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-black to-transparent ${
                blurHeader ? 'backdrop-blur-sm' : 'backdrop-blur-none'
            } transition-transform duration-500 ease-in-out ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <Link href={'/'}>
                <div className="flex items-center space-x-2 w-[150px] md:w-[200px] h-[60px] cursor-pointer">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M50.6167 24.0839C50.1969 10.9327 39.5404 0.319787 26.3448 0C26.0049 0 25.725 0.259827 25.725 0.5996L25.705 9.43371C25.705 9.87342 25.3651 10.2132 24.9253 10.2332C11.7697 10.6329 1.15321 21.3058 0.833313 34.497C0.833313 34.8368 1.09323 35.1166 1.43311 35.1166L10.2502 35.1366C10.69 35.1366 11.0299 35.4763 11.0499 35.9161C11.4698 49.0673 22.1462 59.6802 35.3218 60C35.6617 60 35.9416 59.7402 35.9416 59.4004L35.9616 50.5663C35.9616 50.1266 36.3015 49.7868 36.7413 49.7668C49.897 49.3471 60.5134 38.6742 60.8333 25.503C60.8333 25.1632 60.5734 24.8834 60.2335 24.8834L51.4165 24.8634C50.9766 24.8634 50.6367 24.5236 50.6167 24.0839ZM35.0819 49.7069C27.6044 49.2672 21.6064 43.1912 21.3265 35.6762C21.3065 35.3564 21.0466 35.0966 20.7267 35.0966L11.9296 35.0766C11.4698 35.0766 11.1099 34.6969 11.1299 34.2372C11.5697 26.7622 17.6477 20.7662 25.1652 20.4863C25.4851 20.4664 25.745 20.2065 25.745 19.8867L25.765 11.0726C25.765 10.6129 26.1449 10.2532 26.6047 10.2732C34.0822 10.7129 40.0802 16.7888 40.3601 24.3038C40.3801 24.6236 40.64 24.8834 40.9599 24.8834L49.757 24.9034C50.2169 24.9034 50.5767 25.2831 50.5567 25.7428C50.1169 33.4177 43.739 39.5137 35.9616 39.5137L35.9416 48.9074C35.9216 49.3671 35.5417 49.7268 35.0819 49.7069Z"
                            fill="#E60000"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.4637 24.6828C25.4637 23.4735 26.7603 22.7068 27.8199 23.2897L37.6062 28.6721C38.7046 29.2762 38.7046 30.8544 37.6062 31.4585L27.8199 36.841C26.7603 37.4238 25.4637 36.6571 25.4637 35.4478V24.6828Z"
                            fill="none"
                            className="fill-current"
                        />
                    </svg>
                    <h1 className="font-righteous text-xl select-none">StreamVibe</h1>
                </div>
            </Link>
            <div className="hidden md:flex mr-0 sm:mr-10 md:mr-16">
                {status === 'loading' ? (
                    <Skeleton className="w-[440px] h-10 p-1" />
                ) : (
                   status === 'authenticated' && <NavBar />
                )}
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex space-x-4">
                    <MagnifyingGlassIcon className="p-1 h-8 w-8" />
                    <BellIcon className="p-1 h-8 w-8 hidden md:flex" />
                </div>
                {status === 'loading' ? (
                    <>
                        <Skeleton className="w-10 h-10 p-1 rounded-full" />
                    </>
                ) : status == 'authenticated' ? (
                    <>
                        <MenuBar>
                            <Avatar className="h-10 w-10 p-1 bg-neutral-800 flex rounded-full ring-1 ring-neutral-800 shadow-lg shadow-neutral-800 cursor-pointer ">
                                <AvatarImage
                                    className="rounded-full select-none"
                                    src={
                                        user?.user?.image ??
                                        'https://github.com/shadcn.png'
                                    }
                                />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>

                            {/* <Bars3BottomRightIcon className="h-10 w-10 p-1 bg-neutral-900 flex rounded-lg ring-1 ring-neutral-800 shadow-lg shadow-neutral-800" /> */}
                        </MenuBar>
                    </>
                ) : (
                    <div className="flex items-center space-x-4 ">
                        <Link
                            href={'/signup'}
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                `dark:bg-red-700 dark:hover:bg-primary-800 dark:text-white font-normal`
                            )}
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
                {/* <ModeToggle className="hidden md:flex" /> */}
            </div>
        </header>
    );
};

export default Header;
