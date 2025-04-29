'use client';

import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/shared/ui/hover-card';
import { Textarea } from '@/shared/ui/textarea';
import { ArrowBigUp, CircleHelp } from 'lucide-react';
import { useRef, useState } from 'react';


export function EnteringPrompts() {
    const [prompt, setPrompt] = useState<string>('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleAreaClick = () => {
        textareaRef.current?.focus();
    };
    return (
        <Card onClick={handleAreaClick} className="w-full border-none p-0 bg-[var(--secondary)]">
            <CardContent className="flex flex-1 flex-col py-4 items-end">
                <Textarea ref={textareaRef} className="resize-none border-none !bg-[var(--secondary)]" placeholder="Write some prompt" value={prompt} onChange={({ target }) => setPrompt(target.value)} />
                <div className="flex w-full justify-between">
                    <HoverCard>
                        <HoverCardTrigger className="cursor-pointer">
                            <Button size="icon" variant="secondary" className="rounded-full"><CircleHelp /></Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.
                        </HoverCardContent>
                    </HoverCard>

                    <Button size="icon" disabled={!prompt} className="rounded-full cursor-pointer"><ArrowBigUp /></Button>
                </div>
            </CardContent>
        </Card>
    );
}
