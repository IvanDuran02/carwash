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
    description: "Experience top-tier car detailing at your doorstep with West Island Mobile Detailing. Luxury made easy.",
    openGraph: {
        title: "West Island Mobile Detailing",
        description: "Experience top-tier car detailing at your doorstep with West Island Mobile Detailing. Luxury made easy.",
        images: [{
            url: "http://samsmobiledetailing.vercel.app/carwash_logo.png",
            width: 733,
            height: 733,
            alt: "Sam's Mobile Detailing Logo"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "West Island Mobile Detailing",
        description: "Experience top-tier car detailing at your doorstep with West Island Mobile Detailing. Luxury made easy.",
        images: [{
            url: "http://samsmobiledetailing.vercel.app/carwash_logo.png",
            width: 733,
            height: 733,
            alt: "Sam's Mobile Detailing Logo"
        }]


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
