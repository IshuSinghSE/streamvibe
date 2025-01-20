'use client';
import {
    CreditCard,
    LifeBuoy,
    LogOut,
    Settings,
    User
} from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { BellIcon, FilmIcon, Square2StackIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export function MenuBar({
    children,
}: {
    children: React.ReactNode;
    
}) {
    const {data: user} = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-md tracking-wide">
                    {user?.user?.name ?? 'My Account'}
                </DropdownMenuLabel>
                <DropdownMenuLabel className="bg-gradient-to-t from-neutral-400 to-neutral-200 bg-clip-text mask text-transparent text-sm -my-2 -mt-3 font-semibold">
                    {user?.user && user?.user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <Link href="/dashboard" passHref>
                    <DropdownMenuItem>
                        <Square2StackIcon />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                </Link>
                <Link href="/movies" passHref>
                    <DropdownMenuItem>
                        <FilmIcon />
                        <span>Movies</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </Link>
                    <Link href="/series" passHref>
                    <DropdownMenuItem>
                        <ViewColumnsIcon />
                        <span>Shows</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>{' '}
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BellIcon />
                        <span>Notifications</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <User />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <CreditCard />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <Link href="/support" passHref>
                    <DropdownMenuItem>
                        <LifeBuoy />
                        Support
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                {user?.user && (
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="text-red-500" />
                        <span className="text-red-500">Log out</span>
                        {/* <DropdownMenuShortcut className="text-red-500">⇧⌘Q</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
