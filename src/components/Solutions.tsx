import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Monitor, Cpu, HardDrive, Headphones } from 'lucide-react';

const industries = [
    {
        id: "laptops",
        name: "Laptops",
        icon: <Laptop className="w-4.5 h-4.5" />,
        title: "Laptops (Including Apple)",
        description: "We buy all kinds of used laptops, including Apple MacBooks, in working or non-working condition. Upgrade your corporate fleet and clear out the old inventory instantly.",
        metrics: ["MacBooks", "Windows Laptops"],
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1200" // Premium modern MacBook
    },
    {
        id: "desktops",
        name: "Desktops",
        icon: <Monitor className="w-4.5 h-4.5" />,
        title: "Branded & Assembled Desktops",
        description: "Whether you have branded workstations or custom-assembled desktop PCs, we offer the best value for your used desktop hardware.",
        metrics: ["Branded PCs", "Assembled Desktops"],
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&q=80" // Premium iMac Desktop Setup
    },
    {
        id: "components",
        name: "Components",
        icon: <Cpu className="w-4.5 h-4.5" />,
        title: "RAM & Processors",
        description: "Got excess inventory of internal components? We purchase individual or bulk quantities of RAM sticks and processors from all generations.",
        metrics: ["DDR3/DDR4/DDR5", "Intel & AMD"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
    },
    {
        id: "storage",
        name: "Storage",
        icon: <HardDrive className="w-4.5 h-4.5" />,
        title: "Hard Disks & SSD",
        description: "We securely acquire and process used internal and external storage drives, offering great prices for both HDDs and high-speed SSDs.",
        metrics: ["SATA & NVMe SSDs", "Hard Disk Drives"],
        image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=1200&q=80"
    },
    {
        id: "accessories",
        name: "Accessories",
        icon: <Headphones className="w-4.5 h-4.5" />,
        title: "IT Accessories",
        description: "From keyboards and mice to monitors, docking stations, and audio gear, we buy all types of IT peripherals and networking accessories.",
        metrics: ["Peripherals", "Networking Gear"],
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80" // Premium headphones
    }
];

export function Solutions() {
    const [activeTab, setActiveTab] = useState(industries[0].id);

    const activeContent = industries.find(i => i.id === activeTab) || industries[0];

    return (
        <section id="solutions" className="py-32 bg-[#fafafa] border-y border-gray-100/80 overflow-hidden relative">
            <div className="absolute inset-0 noise-bg opacity-30"></div>

            <div className="max-w-[76rem] mx-auto px-6 lg:px-8 relative z-10">

                <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-10">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-[56px] font-bold tracking-tight text-[#09090b] mb-4 leading-[1.05]"
                        >
                            What <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#1DB0F2]">We Buy.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-500 font-light text-[18px]"
                        >
                            We purchase used IT assets in both bulk and individual quantities.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-2 p-1.5 bg-gray-200/50 rounded-[24px] md:rounded-full border border-gray-200/80 w-full md:w-auto"
                    >
                        {industries.map((ind) => (
                            <button
                                key={ind.id}
                                onClick={() => setActiveTab(ind.id)}
                                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 relative ${activeTab === ind.id
                                    ? 'text-[#09090b] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-white'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/40'
                                    }`}
                            >
                                {activeTab === ind.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 rounded-full bg-white border border-gray-100"
                                        style={{ zIndex: -1 }}
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}
                                <div className={`flex items-center justify-center transition-colors duration-300 ${activeTab === ind.id ? 'text-blue-600' : 'text-gray-400'}`}>
                                    {ind.icon}
                                </div>
                                {ind.name}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="bg-white rounded-[48px] p-5 lg:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-200 flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[520px]">
                    <div className="flex-1 py-8 px-6 lg:py-16 lg:px-12 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15, position: 'absolute' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 text-blue-600 text-[13px] font-bold tracking-wide shadow-sm">
                                    {activeContent.icon}
                                    <span>{activeContent.name}</span>
                                </div>

                                <h3 className="text-[34px] md:text-[42px] font-bold text-[#09090b] tracking-tight mb-6 leading-[1.1]">
                                    {activeContent.title}
                                </h3>

                                <p className="text-[18px] text-[#4b5563] mb-12 leading-[1.7] font-light max-w-lg">
                                    {activeContent.description}
                                </p>

                                <div className="flex flex-wrap gap-14 mb-14">
                                    {activeContent.metrics.map((metric, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="font-bold text-[#09090b] text-[16px]">{metric}</span>
                                        </div>
                                    ))}
                                </div>


                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex-1 relative rounded-[36px] overflow-hidden bg-gray-100 shadow-inner group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                src={activeContent.image}
                                alt={activeContent.name}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 border border-black/5 rounded-[36px] pointer-events-none z-10"></div>
                        {/* Inner vignette */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none z-0"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
