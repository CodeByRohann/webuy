import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
    return (
        <section id="clients" className="py-32 relative overflow-hidden bg-[#ffffff]">
            <div className="absolute inset-0 noise-bg"></div>

            <div className="max-w-[76rem] mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#09090b] rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-[#27272a]"
                >
                    {/* Symmetrical glowing flares */}
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-[140px] transform-gpu will-change-transform opacity-40 pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-700/60 rounded-full blur-[140px] transform-gpu will-change-transform opacity-40 pointer-events-none"></div>

                    <div className="absolute inset-0 noise-bg opacity-50 mix-blend-overlay"></div>

                    <div className="relative z-10 text-white max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-gray-300">Client Testimonials</span>
                        </motion.div>

                        <h2 className="text-[48px] md:text-[72px] font-bold tracking-tight mb-8 leading-[1.05] text-white drop-shadow-lg">
                            What Our <br className="hidden md:block" /> Clients Say.
                        </h2>

                        <div className="flex flex-col gap-6 text-[19px] md:text-[22px] text-gray-400 mb-12 font-light leading-[1.6] max-w-2xl mx-auto">
                            <p className="italic bg-white/5 rounded-2xl p-6 border border-white/10 text-gray-300">"Smooth pickup and instant payment. Highly professional service."</p>
                            <p className="italic bg-white/5 rounded-2xl p-6 border border-white/10 text-gray-300">"Transparent pricing and quick response."</p>
                            <p className="italic bg-white/5 rounded-2xl p-6 border border-white/10 text-gray-300">"Best local option for bulk IT asset clearance."</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <a
                                href="https://wa.me/918957575798"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-5 bg-gradient-to-b from-white to-gray-200 text-[#09090b] rounded-2xl font-bold text-[16px] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 group"
                            >
                                Sell on WhatsApp
                                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </a>
                            <a
                                href="tel:+918957575798"
                                className="w-full sm:w-auto px-8 py-5 bg-[#18181b]/50 text-white border border-white/10 rounded-2xl font-bold text-[16px] hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex items-center justify-center text-center"
                            >
                                Request a Callback
                            </a>
                        </div>

                        <p className="mt-12 text-[14px] text-gray-500 font-medium tracking-tight">
                            Get a free, no-obligation estimate today.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
