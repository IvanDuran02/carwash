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
    title: "West Island Mobile Detailing",
    description: "Experience the ultimate convenience and luxury with West Island Mobile Detailing. We bring top-tier car washing and detailing services directly to your doorstep. Whether you need a thorough interior cleaning, a spotless exterior wash, or a comprehensive interior and exterior detailing, we've got you covered.",
    openGraph: {
        title: "West Island Mobile Detailing",
        description: "Experience the ultimate convenience and luxury with West Island Mobile Detailing. We bring top-tier car washing and detailing services directly to your doorstep. Whether you need a thorough interior cleaning, a spotless exterior wash, or a comprehensive interior and exterior detailing, we've got you covered.",
        images: ['carwash_logo.png']
    },
    twitter: {
        card: "summary_large_image",
        title: "West Island Mobile Detailing",
        description: "Experience the ultimate convenience and luxury with West Island Mobile Detailing. We bring top-tier car washing and detailing services directly to your doorstep. Whether you need a thorough interior cleaning, a spotless exterior wash, or a comprehensive interior and exterior detailing, we've got you covered.",
        images: ['carwash_logo.png']


    }
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
