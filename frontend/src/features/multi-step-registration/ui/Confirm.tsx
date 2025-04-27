import type { Control, FieldValues } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/ui/input-otp';
import React from 'react';


export function Confirm({ control, email }: {
    control: Control<FieldValues, any, FieldValues>;
    email: string;
}) {
    return (
        <FormField
            control={control}
            name="confirm"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Confirm your email</FormLabel>
                    <FormControl>
                        <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </FormControl>
                    <FormDescription>
                        Code has been sent to
                        {' '}
                        { email }
                        , write it here to confirm email
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
