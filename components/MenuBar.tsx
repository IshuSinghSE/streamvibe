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
import { FilmIcon, Square2StackIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export function MenuBar({
    children,
    user = null
}: {
    children: React.ReactNode;
    user:
        | {
              id?: string;
              email?: string;
              emailVerified?: boolean;
              name?: string;
              image?: string;
          }
        | undefined
        | null;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-md tracking-wide">
                    {user?.name ?? 'My Account'}
                </DropdownMenuLabel>
                <DropdownMenuLabel className="bg-gradient-to-t from-neutral-400 to-neutral-200 bg-clip-text mask text-transparent text-sm -my-2 -mt-3 font-semibold">
                    {user && user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Square2StackIcon />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FilmIcon />
                        <span>Movies</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ViewColumnsIcon />
                        <span>Shows</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>{' '}
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
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
                <Link href="/support">
                    <DropdownMenuItem>
                        <LifeBuoy />
                        Support
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                {user && (
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
