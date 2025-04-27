import type { Control, FieldValues } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';


export function Password({ control }: {
    control: Control<FieldValues, any, FieldValues>;
}) {
    return (
        <div className="flex flex-col gap-4">
            <FormField
                control={control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Create password" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormDescription>
                            Please enter your password.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Confirm password" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormDescription>
                            Please confirm your password.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
