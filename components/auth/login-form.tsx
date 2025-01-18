'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword
} from '@/lib/actions/auth';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export function LoginForm({ formType }: { formType: 'signin' | 'signup' }) {
    const [data, setData] = useState({
        email: '',
        password: '',
        fullName: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            formType === 'signup' &&
            (!data.fullName || !data.email || !data.password)
        ) {
            return;
        }
        if (formType === 'signin' && (!data.email || !data.password)) {
            return;
        }

        if (formType === 'signup') {
            const res = await signUpWithEmailAndPassword(data);
            if (res.success) {
                redirect('/dashboard');
            }
        }
        if (formType === 'signin') {
            const res = await signInWithEmailAndPassword({
                email: data.email,
                password: data.password
            });

            if (res.success) {
                redirect('/dashboard');
            }
        }
    };

    return (
        <div
            className={cn(
                'flex flex-col gap-2 md:gap-4',
                'justify-center mt-20 md:mt-12'
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-90 z-0 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 z-0"></div>
            <Image
                src="/assets/images/auth-cover.jpg"
                alt="Auth Cover"
                priority={true}
                fill={true}
                className="bg-center absolute inset-0 w-full h-screen object-cover -z-10"
            />
            <Card className="overflow-hidden z-10">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    Welcome {formType === 'signin' && 'back'}
                                </h1>
                                <p className="text-balance text-neutral-500 dark:text-neutral-400">
                                    {formType === 'signup'
                                        ? 'Sign up'
                                        : 'Sign in'}{' '}
                                    to your StreamVibe account
                                </p>
                            </div>
                            {formType === 'signup' && (
                                <div className="grid gap-2">
                                    <Label htmlFor="fullname">Full Name</Label>
                                    <Input
                                        id="fullname"
                                        name="fullName"
                                        type="fullname"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                fullName: e.target.value
                                            })
                                        }
                                        placeholder="Enter your name"
                                    />
                                </div>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            email: e.target.value
                                        })
                                    }
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="#"
                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        })
                                    }
                                    placeholder="Enter your password"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                {formType === 'signin' ? 'Sign in' : 'Sign up'}
                            </Button>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                                <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" className="w-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path
                                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">
                                        {formType === 'signup'
                                            ? 'Sign in'
                                            : 'Sign up'}{' '}
                                        with Apple
                                    </span>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => signIn('google')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512"
                                    >
                                        <path
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">
                                        {formType === 'signup'
                                            ? 'Sign in'
                                            : 'Sign up'}{' '}
                                        with Google
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => signIn('facebook')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path
                                            d="M640 317.9C640 409.2 600.6 466.4 529.7 466.4C467.1 466.4 433.9 431.8 372.8 329.8L341.4 277.2C333.1 264.7 326.9 253 320.2 242.2C300.1 276 273.1 325.2 273.1 325.2C206.1 441.8 168.5 466.4 116.2 466.4C43.4 466.4 0 409.1 0 320.5C0 177.5 79.8 42.4 183.9 42.4C234.1 42.4 277.7 67.1 328.7 131.9C365.8 81.8 406.8 42.4 459.3 42.4C558.4 42.4 640 168.1 640 317.9H640zM287.4 192.2C244.5 130.1 216.5 111.7 183 111.7C121.1 111.7 69.2 217.8 69.2 321.7C69.2 370.2 87.7 397.4 118.8 397.4C149 397.4 167.8 378.4 222 293.6C222 293.6 246.7 254.5 287.4 192.2V192.2zM531.2 397.4C563.4 397.4 578.1 369.9 578.1 322.5C578.1 198.3 523.8 97.1 454.9 97.1C421.7 97.1 393.8 123 360 175.1C369.4 188.9 379.1 204.1 389.3 220.5L426.8 282.9C485.5 377 500.3 397.4 531.2 397.4L531.2 397.4z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">
                                        {formType === 'signup'
                                            ? 'Sign in'
                                            : 'Sign up'}{' '}
                                        with Meta
                                    </span>
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{' '}
                                <Link
                                    href={`/${
                                        formType === 'signup'
                                            ? 'signin'
                                            : 'signup'
                                    }`}
                                    className="underline underline-offset-4"
                                >
                                    {formType === 'signup'
                                        ? 'Sign in'
                                        : 'Sign up'}
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="relative hidden bg-dark-800 md:block dark:bg-neutral-800">
                        <Image
                            src="/assets/images/side-image.png"
                            alt="Image"
                            fill={true}
                            priority={true}
                            className="absolute inset-0 h-full w-full object-cover overflow-hidden dark:brightness-[0.2] dark:grayscale brightness-75"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-neutral-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-neutral-900 dark:text-neutral-400 dark:hover:[&_a]:text-neutral-50 z-10">
                By clicking continue, you agree to our{' '}
                <Link href="#">Terms of Service</Link> and{' '}
                <Link href="#">Privacy Policy</Link>.
            </div>
        </div>
    );
}
