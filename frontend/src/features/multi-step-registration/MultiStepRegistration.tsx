'use client';

import { Confirm } from '@/features/multi-step-registration/ui/Confirm';
import { Password } from '@/features/multi-step-registration/ui/Password';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Email } from './ui/Email';


export function MultiStepRegistration() {
    const [step, setStep] = useState(0);
    const TotalStep = 2;


    const form = useForm();

    const {
        control,
        getValues,
    } = form;

    const onSubmit = async () => {
        if (step < TotalStep) {
            setStep(step + 1);
        }
    };

    function handleBack(e: any) {
        e.preventDefault();
        setStep(step - 1);
    };

    function getStepForm() {
        switch (step) {
            case (0):
                return <Email control={control} />;
            case (1):
                return <Password control={control} />;
            case (2): {
                const email = getValues<string>('email');
                return <Confirm email={email} control={control} />;
            }
        }
    }

    function submitText() {
        return step === 2 ? 'Submit' : 'Next';
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
                {
                    getStepForm()
                }

                <div className="flex gap-4 pt-4 justify-between">
                    <Button className="flex flex-1" disabled={step === 0} onClick={handleBack} variant="outline">Back</Button>
                    <Button className="flex flex-1" type="submit">{ submitText() }</Button>
                </div>
            </form>
        </Form>
    );
}
