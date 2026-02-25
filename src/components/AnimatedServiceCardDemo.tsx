"use client";

import {
    ServiceCarousel,
    type Service,
} from "@/components/ui/services-card";
import { Palette, Code, Search } from "lucide-react";

// Define the data for the services
const demoServices: Service[] = [
    {
        number: "001",
        title: "Branding",
        description:
            "We craft logos and brand systems that leave a lasting impression.",
        icon: Palette,
        gradient: "from-purple-50 to-purple-100 border-purple-200",
    },
    {
        number: "002",
        title: "Development",
        description:
            "Beautiful and functional websites built with purpose and precision.",
        icon: Code,
        gradient: "from-green-50 to-green-100 border-green-200",
    },
    {
        number: "003",
        title: "Cloud Solutions",
        description:
            "Scalable and secure cloud infrastructure for modern businesses.",
        icon: Search,
        gradient: "from-blue-50 to-blue-100 border-blue-200",
    },
];

// The demo component
export default function AnimatedServiceCardDemo() {
    return (
        <div className="w-full bg-background flex flex-col items-center justify-center p-8 min-h-screen">
            <div className="text-left w-full max-w-6xl mb-12">
                <h1 className="text-6xl font-black tracking-tighter">Services.</h1>
            </div>
            <ServiceCarousel services={demoServices} />
        </div>
    );
}
