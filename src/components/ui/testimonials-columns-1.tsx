"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: { text: string; image: string; name: string; role: string }[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="p-8 rounded-3xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-md max-w-xs w-full text-white hover:bg-white/10 transition-colors duration-300"
                                    key={i}
                                >
                                    <div className="text-gray-300 leading-relaxed font-light text-[15px] italic mb-6">"{text}"</div>
                                    <div className="flex items-center gap-4">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full object-cover border border-white/20"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-bold tracking-tight text-[15px]">{name}</div>
                                            <div className="leading-5 text-gray-400 text-[13px]">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
