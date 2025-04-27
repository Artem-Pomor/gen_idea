import type { Metadata } from 'next';
import { Toaster } from '@/shared/ui/sonner';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from './theme';
import './globals.css';


const poppins = Poppins({
    variable: '--font-poppins-sans',
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'DreamScape',
    description: 'DreamScape - is a platform for generating story ideas',
};


export default function RootLayout(
    { children }:
    Readonly<{
        children: React.ReactNode;
    }>,
) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body className={`${poppins.variable} antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
