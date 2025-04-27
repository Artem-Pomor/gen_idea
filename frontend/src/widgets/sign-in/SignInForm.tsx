import { MultiStepRegistration } from '@/features/multi-step-registration';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';


export function SignInForm() {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
            </CardHeader>
            <CardContent>
                <MultiStepRegistration />
            </CardContent>
        </Card>

    );
}
