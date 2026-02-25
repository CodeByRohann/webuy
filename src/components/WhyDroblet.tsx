import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export function WhyDroblet() {
    const comparison = [
        {
            feature: "Trusted Local Buyer",
            droblet: "Direct & Reliable Local Service",
            traditional: "Anonymous Online Portals",
        },
        {
            feature: "Payment Method",
            droblet: "Instant Cash or Online Transfer",
            traditional: "Delayed Processing & Approvals",
        },
        {
            feature: "Pricing & Valuation",
            droblet: "Fair Market Valuation",
            traditional: "Lowball Offers & Hidden Fees",
        },
        {
            feature: "Corporate Handling",
            droblet: "Bulk Corporate Clearance",
            traditional: "Limited Quantity Support",
        },
        {
            feature: "Process Quality",
            droblet: "Professional & Transparent Process",
            traditional: "Complicated & Slow Workflows",
        }
    ];

    return (
        <section id="about" className="py-32 lg:py-48 bg-[#09090b] border-t border-gray-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 noise-bg opacity-40 mix-blend-overlay"></div>

            {/* Deep dark glows - higher opacity for Stripe-like impact */}
            <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/15 rounded-full blur-[140px] transform-gpu will-change-transform pointer-events-none"></div>

            <div className="max-w-[76rem] mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[64px] font-bold tracking-tight mb-8 leading-[1.05]"
                    >
                        Why choose <span className="text-blue-600 drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">WeBuy Tech</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[20px] text-gray-400 font-light leading-[1.6]"
                    >
                        WeBuy Tech is a trusted local IT asset purchasing company focused on providing fast, transparent, and secure transactions. We specialize in buying used laptops, desktops, and IT hardware from individuals and corporate clients. Our goal is to make the selling process simple, fair, and efficient with instant payment and free pickup.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto bg-[#18181b]/40 backdrop-blur-[32px] transform-gpu will-change-transform rounded-[40px] border border-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 p-8 border-b border-white/5 bg-[#18181b]/60">
                        <div className="text-[12px] font-bold text-gray-500 uppercase tracking-widest col-span-1 flex items-center">Feature</div>
                        <div className="text-[20px] font-bold text-white col-span-1 text-center flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center text-[16px] shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-500/30">W</div>
                            WeBuy Tech
                        </div>
                        <div className="text-[15px] font-semibold text-gray-500 col-span-1 text-center flex items-center justify-center">Other Buyers</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-white/5">
                        {comparison.map((row, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx, ease: "easeOut" }}
                                className="grid grid-cols-3 p-8 hover:bg-[#18181b]/80 transition-colors duration-300"
                            >
                                <div className="font-semibold tracking-tight text-gray-300 col-span-1 flex items-center text-[17px]">{row.feature}</div>
                                <div className="text-emerald-400 font-medium col-span-1 text-center flex items-center justify-center gap-3 text-[16px]">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                    <span>{row.droblet}</span>
                                </div>
                                <div className="text-gray-500 col-span-1 text-center flex items-center justify-center gap-3 text-[15px] font-medium">
                                    <XCircle className="w-5 h-5 flex-shrink-0 opacity-40" />
                                    <span>{row.traditional}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
