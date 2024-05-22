"use client"

import { Button } from "./ui/button";
import { ThemeButton } from "./theme-button"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion";

const SpinnyAnimation = () => {
    return (
        <motion.div
            className="bg-primary w-8 h-8 rounded-md p-2 hidden md:block"
            animate={{
                scale: [1, 1.3, 1.3, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2.3,
                ease: "easeInOut",
                times: [0, 0.2, 0.45, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 2
            }}
        />
    );
}

export default function Navbar() {
    return (
        <nav className="h-[8vh] max-h-[10vh] w-screen flex items-center bg-background border-b">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SpinnyAnimation />
                    <Link href="/">
                        <h1 className="font-bold text-3xl">
                            {"Sam's"}<span className={cn("text-primary")}> Wash</span>
                        </h1>
                    </Link>
                </div>
                <div className="flex justify-between gap-2">
                    <ThemeButton />
                    <Button className="font-semibold">
                        Login
                    </Button>
                    <Button variant="secondary" className="font-semibold">
                        Sign up
                    </Button>
                </div>
            </div>
        </nav>
    )
}

