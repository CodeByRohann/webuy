import { motion } from 'framer-motion';
import { Laptop, Monitor, Package, ShieldCheck, Truck, Phone, ArrowRight } from 'lucide-react';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';

const featuresData: Service[] = [
    {
        number: "001",
        title: "Used Laptop Buying",
        description: "We purchase all types of used laptops including Apple MacBooks, providing fair market valuation and quick processing.",
        icon: Laptop,
        gradient: "from-blue-50/50 to-white",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400"
    },
    {
        number: "002",
        title: "Desktop Buying",
        description: "Best value for branded workstations and custom-assembled desktop PCs with transparent testing and assessment.",
        icon: Monitor,
        gradient: "from-indigo-50/50 to-white",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2400"
    },
    {
        number: "003",
        title: "Bulk Clearance",
        description: "Efficient processing for large volume IT asset liquidation, perfect for office shifts or technological upgrades.",
        icon: Package,
        gradient: "from-sky-50/50 to-white",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400"
    },
    {
        number: "004",
        title: "Corporate Disposal",
        description: "Secure and professional end-of-life IT equipment disposal with certified data destruction for businesses.",
        icon: ShieldCheck,
        gradient: "from-slate-50/50 to-white",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400"
    },
    {
        number: "005",
        title: "Pickup & Payment",
        description: "Enjoy zero-hassle free logistics and instant payment via UPI, Bank Transfer or Cash upon pickup.",
        icon: Truck,
        gradient: "from-emerald-50/50 to-white",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2400"
    }
];

export function Features() {
    return (
        <section id="services" className="py-24 lg:py-40 bg-[#ffffff] relative overflow-hidden">
            <div className="absolute inset-0 noise-bg"></div>

            {/* Background ambient glow */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] transform-gpu will-change-transform pointer-events-none"></div>

            <div className="max-w-[84rem] mx-auto px-6 lg:px-8 relative z-10">

                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] border border-gray-200 mb-6 shadow-sm"
                    >
                        <span className="text-[11px] font-bold text-gray-600 tracking-widest uppercase">Our Services</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[56px] font-bold tracking-tight text-[#09090b] mb-6 leading-[1.1]"
                    >
                        Comprehensive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#1DB0F2] drop-shadow-sm">IT Asset Services.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[20px] text-[#4b5563] leading-[1.6] font-light tracking-tight max-w-2xl mx-auto"
                    >
                        WeBuy Tech provides professional and transparent services for all your IT asset disposal needs.
                    </motion.p>
                </div>

                {/* New Animated Carousel with High-Quality Images - Sanket */}
                <div className="mb-20">
                    <ServiceCarousel services={featuresData} />
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.a
                        href="https://wa.me/918957575798"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-[40px] p-[1px] relative overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-700 min-h-[280px] block"
                    >
                        {/* Rich mesh gradient background - Sanket */}
                        <div className="absolute inset-0 bg-[#09090b]">
                            <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.8)_0%,transparent_70%)] opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
                            <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.6)_0%,transparent_70%)] opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay"></div>

                        <div className="relative h-full w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left p-10 lg:p-12 gap-8">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 rounded-[20px] bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/20 shadow-2xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-700 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
                                    <Phone className="w-7 h-7 text-white relative z-10" />
                                </div>
                                <h3 className="text-[32px] font-bold text-white tracking-tight mb-3 leading-none">Contact Us Today</h3>
                                <p className="text-blue-100/80 text-[18px] font-medium leading-relaxed max-w-[400px]">Reach out on WhatsApp for a quick estimate on your used hardware.</p>
                            </div>

                            <div className="flex items-center gap-4 group/btn">
                                <span className="text-white font-bold text-lg hidden sm:block">Get Started</span>
                                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 shadow-xl">
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
