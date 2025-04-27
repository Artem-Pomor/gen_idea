import type { Control, FieldValues } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';


export function Email({ control }: {
    control: Control<FieldValues, any, FieldValues>;
}) {
    return (
        <FormField
            control={control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="mymail@mail.com" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormDescription>
                        For next step of registration, you need to write your email
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
