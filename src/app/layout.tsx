import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
})

export const metadata: Metadata = {
    title: "Looking to get your car washed by a 6'5 250 pound monster meanace in the top lane?",
    description: "Contact sam for a wash, rates starting from $999 but no worries, we take payment plans!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <main>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </main>
            </body>
        </html>
    );
}
