import { MultiStepRegistration } from '@/features/multi-step-registration';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import Link from 'next/link';


export function SignInForm() {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
            </CardHeader>
            <CardContent>
                <MultiStepRegistration />
            </CardContent>
            <CardFooter>
                <CardDescription className="flex flex-1 flex-row items-center justify-end">
                    Do you already have an account?
                    <Button className="p-1" variant="link">
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                </CardDescription>

            </CardFooter>
        </Card>

    );
}
