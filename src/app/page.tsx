"use client"

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Body() {
    return (
        <section
            className="w-full h-[100vh] flex justify-center items-center bg-[url('https://wallpaperswide.com/download/hot_girl_luxury_car-wallpaper-2400x1350.jpg')] bg-contain  md:bg-center"
        >
            <div>
                <motion.h1
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-4xl font-bold text-white"
                >
                    {"Welcome to Sam's wash"}
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, translateY: -35 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-2xl font-bold text-white">{"Looking to get you're car washed?"}</motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, translateY: -25 }}
                    transition={{ delay: 2.7, duration: 1.5 }}
                    className="flex gap-4 p-4 justify-center">
                    <Link href="/login/doctor">
                        <Button size="lg" className="font-semibold">
                            View Options
                        </Button>
                    </Link>
                    <Link href="/login/doctor">
                        <Button size="lg" variant="secondary" className="font-semibold">
                            Book Appointment
                        </Button>
                    </Link>
                </motion.div>
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

