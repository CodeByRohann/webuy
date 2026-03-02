import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

export function Hero() {
    return (
        <div id="home" className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#fafafa]">
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(225,29,72,0.03)_0%,rgba(225,29,72,0)_60%)] rounded-full"></div>
                <div className="absolute bottom-[-30%] left-[-20%] w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(244,63,94,0.02)_0%,rgba(225,29,72,0)_60%)] rounded-full"></div>
                <div className="absolute inset-0 z-[2] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_30%,#000_30%,transparent_100%)] opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa] z-[3]"></div>
            </div>

            <div className="max-w-[84rem] mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 2xl:col-span-5 relative z-20"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-[13px] font-semibold text-[#09090b] tracking-wide relative top-[0.5px]">Acquiring Enterprise IT Assets</span>
                        </motion.div>

                        <h1 className="text-[40px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[88px] font-bold tracking-tight text-[#09090b] mb-6 leading-[1.02]">
                            Sell Your Used <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#1DB0F2]">IT Equipment.</span>
                        </h1>

                        <p className="text-[16px] md:text-[18px] lg:text-[21px] text-gray-500 mb-10 leading-[1.6] max-w-[540px] font-normal">
                            Instantly convert your unused corporate laptops, high-end workstations, and IT infrastructure into capital. Secure, fast, and fully transparent.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <a
                                href="https://wa.me/918957575798"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackWhatsAppClick('hero')}
                                className="w-full sm:w-auto px-8 py-4 bg-[#09090b] text-white rounded-[16px] font-bold text-[16px] hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_14px_rgba(0,0,0,0.1)] group"
                            >
                                Get Your Quote
                                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#how-it-works"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-[#09090b] border border-gray-200 rounded-[16px] font-bold text-[16px] shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                See How It Works
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4.5 h-4.5 text-green-600" />
                                Data Wiped Priority
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4.5 h-4.5 text-amber-500" />
                                Instant Payouts
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Floating UI Composition */}
                    <div className="lg:col-span-6 2xl:col-span-7 relative w-full h-[360px] sm:h-[450px] lg:h-[640px] flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[560px] aspect-square">

                            {/* Main Background Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-4 md:inset-8 lg:inset-12 rounded-[32px] overflow-hidden shadow-[0_24px_80px_-20px_rgba(0,0,0,0.15)] border border-gray-200/50 bg-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2400"
                                    alt="Premium professional IT devices for liquidation"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[32px] pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#09090b]/40 to-transparent"></div>
                            </motion.div>

                            {/* Floating UI Card 1: Quote Generated */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, x: -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute top-[15%] left-0 md:-left-8 bg-white/95 backdrop-blur-xl border border-gray-200/80 p-4 rounded-[20px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] hidden sm:flex items-center gap-4 w-auto min-w-[240px] z-20"
                            >
                                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                                    <span className="text-blue-600 font-bold text-[19px] relative top-[1px]">₹</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Quote Generated</p>
                                    <p className="text-[18px] font-bold text-[#09090b] leading-tight">₹ 1,24,500</p>
                                </div>
                            </motion.div>

                            {/* Floating UI Card 2: Payment Processed */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-[20%] right-0 md:-right-6 bg-[#09090b]/95 backdrop-blur-xl border border-gray-800 p-4 rounded-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.3)] hidden sm:flex items-center gap-3.5 w-auto min-w-[260px] z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[13px] font-semibold text-white tracking-wide">Payment Processed</p>
                                    <p className="text-[12px] text-gray-400 font-medium">Instantly via IMPS</p>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
