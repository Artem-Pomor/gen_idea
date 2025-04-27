'use client';

import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


export function SignUpForm() {
    const form = useForm();

    const onSubmit = async () => {
    };

    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="mymail@mail.com" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col flex-1 pt-4">
                            <Button type="submit">Sign In</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <CardDescription className="flex flex-1 flex-row items-center justify-end">
                    Don't have an account?
                    <Button className="p-1" variant="link">
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                </CardDescription>
            </CardFooter>
        </Card>

    );
}
