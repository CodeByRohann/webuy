import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Tag, Truck } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Contact us via WhatsApp or Call",
        description: "Reach out to our team instantly via WhatsApp or give us a direct call to start the process.",
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Share product details",
        description: "Provide the specifications, age, and condition of your IT assets or send us a list for bulk items.",
    },
    {
        icon: <Tag className="w-8 h-8" />,
        title: "Get instant price quote",
        description: "Receive a fair, transparent, and highly competitive market valuation for your equipment immediately.",
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Schedule pickup & get paid",
        description: "We pick up the items for free from your location and provide immediate payment via Cash or UPI/Bank Transfer.",
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-32 lg:py-48 bg-white relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-20"></div>

            <div className="max-w-[76rem] mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
                    >
                        <span className="text-[12px] font-bold text-blue-600 tracking-[0.1em] uppercase">Simple Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-[56px] font-bold tracking-tight text-[#09090b] mb-6 leading-[1.05]"
                    >
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#4A86BA]">It Works</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[20px] text-[#4b5563] leading-[1.6] font-light max-w-2xl mx-auto tracking-tight"
                    >
                        Sell your used IT assets in four simple, transparent steps without any hassle.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Desktop: horizontal connecting line */}
                    <div className="absolute top-[4.5rem] left-[15%] w-[70%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden md:block">
                        <motion.div
                            initial={{ width: 0, x: '0%' }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        ></motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-10 relative z-10">
                        {steps.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.1 + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
                                    className="relative bg-white rounded-[28px] md:rounded-[36px] p-6 md:p-8 lg:p-12 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 group overflow-hidden mb-0"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-[#fafafa] border border-gray-100 flex items-center justify-center mb-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 group-hover:border-blue-500 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-500 relative z-10">
                                        <div className="text-gray-800 group-hover:text-white transition-colors duration-500">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#09090b] mb-3 text-center md:text-left tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-[#4b5563] text-center md:text-left leading-[1.7] font-light text-[17px]">
                                        {step.description}
                                    </p>

                                    {/* Massive premium watermark */}
                                    <div className="absolute top-4 right-4 text-[100px] md:text-[140px] font-black leading-none text-gray-100 select-none group-hover:text-blue-50 transition-colors duration-500 pointer-events-none z-0 tracking-tighter">
                                        {idx + 1}
                                    </div>
                                </motion.div>

                                {/* Rohan: vertical connector between steps on mobile only */}
                                {idx < steps.length - 1 && (
                                    <div className="flex justify-center items-center h-6 md:hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: 24 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                                            className="w-[2px] bg-gradient-to-b from-blue-400 to-blue-200 rounded-full"
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
