"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Shadcn UI Carousel Imports
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Added Autoplay - Sanket
import { Button } from "@/components/ui/button";

// --- Carousel Context ---
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}

// --- Main Carousel Component ---
const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = React.useState(false);
        const [canScrollNext, setCanScrollNext] = React.useState(false);

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) return;
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext],
        );

        React.useEffect(() => {
            if (!api || !setApi) return;
            setApi(api);
        }, [api, setApi]);

        React.useEffect(() => {
            if (!api) return;
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return () => {
                api?.off("select", onSelect);
            };
        }, [api, onSelect]);

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation,
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    },
);
Carousel.displayName = "Carousel";

// --- Carousel Content ---
const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className,
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = "CarouselContent";

// --- Carousel Item ---
const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className,
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = "CarouselItem";

// --- Carousel Controls ---
const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute h-12 w-12 rounded-full",
                "right-4 top-1/2 -translate-y-1/2",
                className,
            )}
            onClick={scrollNext}
            disabled={!canScrollNext}
            {...props}
        >
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
});
CarouselNext.displayName = "CarouselNext";

// Rohan: CarouselPrev — mirrors CarouselNext but scrolls backward
const CarouselPrev = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute h-12 w-12 rounded-full",
                "left-4 top-1/2 -translate-y-1/2",
                className,
            )}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            {...props}
        >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
});
CarouselPrev.displayName = "CarouselPrev";

// --- Service Card & Carousel Section ---
export interface Service {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    image?: string; // High quality image support - Sanket
}

// Sub-component for individual cards
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            className={cn(
                "relative flex h-[500px] w-full flex-col justify-between overflow-hidden rounded-[32px] p-8 group cursor-pointer",
                "bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700"
            )}
        >
            {/* Background Image with Mesh Gradient Overlay - Sanket */}
            {service.image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100" // Set to 100% opacity for maximum clarity - Sanket
                    />
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent", // Removed hazy white/50 overlay, using white/20 for crispness - Sanket
                        service.gradient.replace('from-', 'via-').replace('to-', 'to-white') // Blend with service colors
                    )}></div>
                </div>
            )}

            {/* Card Content - Sanket */}
            <div className="relative z-10 flex flex-col items-start h-full">
                <div className="w-full flex justify-end items-start mb-10">
                    {/* Numeric Indicator Removed for Cleaner Look - Sanket */}
                    <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-white/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <service.icon className="h-6 w-6 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-500" />
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="mb-4 text-[26px] font-bold tracking-tight text-[#09090b] group-hover:text-blue-600 transition-colors duration-500">
                        {service.title}
                    </h3>
                    <p className="text-[15px] font-bold text-gray-950 leading-relaxed max-w-[280px] drop-shadow-md"> {/* Darkened text and added shadow for readability on crisp images - Sanket */}
                        {service.description}
                    </p>

                    {/* Learn More indicator - Sanket */}
                    <div className="mt-8 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <span className="text-[13px] font-extrabold text-blue-700 uppercase tracking-widest">Learn More</span>
                        <ArrowRight className="h-4 w-4 text-blue-700 font-bold" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Main exportable component
export const ServiceCarousel = ({ services }: { services: Service[] }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div className="w-full max-w-[84rem] mx-auto relative group/carousel">
            <Carousel
                ref={ref}
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
                className="relative"
            >
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <CarouselContent className="-ml-6">
                        {services.map((service, index) => (
                            <CarouselItem key={index} className="pl-6 basis-[90%] md:basis-1/2 lg:basis-1/3 py-4">
                                <ServiceCard service={service} index={index} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </motion.div>

                {/* Rohan: Left and right arrow controls, visible on carousel hover */}
                <div className="hidden lg:block">
                    <CarouselPrev className="bg-white/90 backdrop-blur-xl border border-gray-200 text-[#09090b] shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -left-6" />
                    <CarouselNext className="bg-white/90 backdrop-blur-xl border border-gray-200 text-[#09090b] shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -right-6" />
                </div>
            </Carousel>
        </div>
    );
};
