/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from 'framer-motion';
import { ThemeButton } from "@/components/theme-button"

function Body() {
    return (
        <section
            className="w-full h-[100vh] flex"
        >
            <AnimatedComponent delay={1.5} duration={2} className="flex absolute justify-center items-center p-4">
                <img src="carwash_logo.png" className="rounded-md md:w-32 md:h-32 h-12 w-12" alt="">
                </img>
            </AnimatedComponent>

            <Services />

            <div className="absolute top-4 right-4">
                <ThemeButton />
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <main className="bg-background w-screen h-screen">
            <Body />
        </main>
    );
}

function AnimatedComponent({ children, delay, duration, opacity, className, initial }: ({ children: any, delay?: number, duration?: number, opacity?: number, className?: string, initial?: number })) {
    return (
        <motion.h1
            initial={{ opacity: initial ?? undefined }}
            animate={{ opacity: opacity ?? undefined }}
            transition={{ delay: delay, duration: duration ?? undefined }}
            className={`text-foreground-accent ${className}`}
        >
            {children}
        </motion.h1 >
    )
}

const Services = () => {
    return (
        <div className="w-full h-full flex justify-center items-center tracking-widest">
            <div className="text-center p-8 h-auto space-y-4 border-foreground-accent">

                <AnimatedComponent delay={1.3} duration={2.5} initial={0} opacity={1}>
                    <div>
                        <h1 className="text-5xl font-bold tracking-widest">West Island</h1>
                        <p className="text-2xl font-semibold tracking-widest">Mobile Detailing</p>
                    </div>
                </AnimatedComponent>

                <AnimatedComponent delay={1.8} duration={3} initial={0} opacity={1} className="flex flex-col justify-between space-y-8 pt-8">
                    <div className="flex justify-between p-2 italic font-semibold">
                        <p>Interior Only</p>
                        <p>$ 70</p>
                    </div>
                    <div className="flex justify-between p-2 italic font-semibold">
                        <p>Exterior Only</p>
                        <p>$ 30</p>
                    </div>
                    <div className="flex justify-between p-2 italic font-semibold">
                        <p>Interior + Exterior</p>
                        <p>$ 110</p>
                    </div>
                    <span className="uppercase opacity-80 text-xs">*Prices vary based on car size*</span>
                </AnimatedComponent>
            </div>
        </div>
    );
};
