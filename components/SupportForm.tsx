'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: 'firstname must be at least 2 characters.'
    }),
    lastName: z.string(),
    email: z.string().email(),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.'
    }),
    subject: z.string().min(2, {
        message: 'subject must be at least 2 characters.'
    })
});

const supportFormField: {
    name: 'firstName' | 'lastName' | 'email' | 'message' | 'subject';

    message: string;
}[] = [
    {
        name: 'firstName',
        message: 'firstname must be at least 2 characters.'
    },
    {
        name: 'lastName',
        message: 'lastname must be at least 2 characters.'
    },
    {
        name: 'email',
        message: 'email must be at least 2 characters.'
    },
    {
        name: 'subject',
        message: 'subject must be at least 2 characters.'
    },
    {
        name: 'message',
        message: 'message must be at least 2 characters.'
    }
];

export default function SupportForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl"
            >
                {supportFormField.map((item) => (
                    <FormField
                        key={item.name}
                        control={form.control}
                        name={item.name}
                        render={({ field }) => (
                            <FormItem className={`${item.name === 'message' ? 'col-span-1 md:col-span-2': '' }`}>
                                <FormLabel
                                    className="text-neutral-300 text-md tracking-wide font-medium"
                                    htmlFor={field.name}
                                >
                                    {field.name === 'firstName'
                                        ? 'First Name'
                                        : field.name === 'lastName'
                                        ? 'Last Name'
                                        : field.name === 'email'
                                        ? 'Email'
                                        : field.name === 'message'
                                        ? 'Message'
                                        : item.name === 'subject'
                                        ? 'Subject'
                                        : 'Unknown'}
                                </FormLabel>
                                <FormControl>
                                    {field.name === 'message' ? (
                                        <textarea
                                            placeholder="Enter your message here"
                                            {...field}
                                            className="bg-neutral-950 border-2 border-neutral-800 p-4 w-full rounded-lg h-32"
                                        />
                                    ) : (
                                        <Input
                                            placeholder={`Enter ${
                                                field.name === 'firstName'
                                                    ? 'First Name'
                                                    : field.name === 'lastName'
                                                    ? 'Last Name'
                                                    : field.name === 'email'
                                                    ? 'Email'
                                                    : item.name === 'subject'
                                                    ? 'Subject'
                                                    : 'Unknown'
                                            }`}
                                            {...field}
                                            className="bg-neutral-950 h-12"
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button type="submit" className='col-span-1 md:col-span-1 md:col-start-2 dark:hover:bg-red-700 dark:bg-red-600 dark:text-white tracking-wide'>Send Message</Button>
            </form>
        </Form>
    );
}
